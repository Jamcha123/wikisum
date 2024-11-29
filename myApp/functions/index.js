import * as functions from 'firebase-functions'; 
import * as cheerio from 'cheerio'; 
import axios from 'axios'; 
import openai from 'openai'

const ai = new openai({apiKey: "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"})

export const obj = functions.https.onRequest({cors: "https://wikipedia.org"}, (req, res) => {
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
        return new functions.https.HttpsError(err)
    })
})