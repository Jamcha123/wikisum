import * as functions from 'firebase-functions'; 
import * as cheerio from 'cheerio'; 
import axios from 'axios'; 
import openai from 'openai'

const ai = new openai({apiKey: "<secret-key>"})

export const obj = functions.https.onRequest((req, res) => {

})