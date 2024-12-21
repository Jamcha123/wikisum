import axios from 'axios'; 
import * as cheerio from 'cheerio'; 
import * as functions from 'firebase-functions'
import openai from 'openai/index.mjs'; 

const ai = new openai({apiKey: ""}); 

export const obj = functions.https.onRequest({cors: true}, (req, res) => {
    const text = req.query.text
    const counter = req.query.count;
    const link = "https://en.wikipedia.org/wiki/" + text;
    axios.get(link, {
        url: link,
        responseType: "document",
        method: "get"
    }).then(async (value) => {
        const $ = cheerio.load(value["data"]); 
        const data = $("p").text();
        if(link != "https://en.wikipedia.org/wiki/"){
            const response = await ai.chat.completions.create({
                model: "gpt-4o", 
                messages: [{
                    role: "user", 
                    content: "summarize this article in " + counter + " words or less, " + data, 
                }]
            })
            res.status(200).send(response.choices[0].message["content"])
            return res.end()
        }
    })
})