import * as functions from 'firebase-functions'; 
import axios from 'axios';
import * as cheerio from 'cheerio'; 
import openai from 'openai'; 

const ai = new openai({apiKey: "<secret-key>"})
export const obj = functions.https.onRequest((req, res) => {
    const text = req.query.text.toString()

    const link = "https://en.wikipedia.org/wiki/" + text;
    axios.get(link, {
        url: link,
        method: "get", 
        responseType: "document"
    }).then(async (value) => {
        const $ = cheerio.load(value["data"])
        console.log($("p").text())
        const data = $("p").text(); 

        const response = await ai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: "summarize this article in 50 words or less, " + data
                }
            ]
        })
        res.status(200).write("<h1>" + JSON.stringify(response.choices[0].message["content"]) + "</h1>");
        return res.end()
    })
})