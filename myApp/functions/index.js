import * as functions from 'firebase-functions'; 
import * as cheerio from 'cheerio'; 
import axios from 'axios'; 
import openai from 'openai'

const ai = new openai({apiKey: "<secret-key>"})

export const obj = functions.https.onRequest((req, res) => {
    const names = req.query.names
    const link = "https://www.wikipedia.org/wiki/" + names.toString() + "";
    axios.get(link, {
        url: link, 
        method: "get",
        responseType: "document",
    }).then(async (value) => {
        const $ = cheerio.load(value["data"]); 
        const text = $("p").text(); 
        const response = await ai.chat.completions.create({
            model: "gpt-4o", 
            messages: [
                {
                    role: "user", 
                    content: [
                        {type: "text", text: "summarize this text in 50 words or less, " + text}
                    ]
                }
            ]
        })
        res.status(200).send(response.choices[0].message["content"])
        return res.end()
    }).catch((err) => {
        return functions.https.HttpsError(err)
    })
})