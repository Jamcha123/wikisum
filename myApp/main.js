import './style.css'
import './fire.js'
import $ from 'jquery'; 
import axios from 'axios'; 
import * as cheerio from 'cheerio';
import httpProxy from 'http-proxy';
import express from 'express'; 

const form = document.getElementById("form")
const input = document.getElementById("article");
const text = document.getElementById("text");

const app = express();

app.get("/:file", (req, res) => {
    
})

const proxy = httpProxy.createProxyServer({target: "https://obj-288814584965.us-central1.run.app"})
proxy.listen(9000, "targets")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    $("#text").empty(); 
    if(input.value){
        app.listen(8080, () => window.location.href = "http://127.0.0.1:9000")
    }
    input.value = ""
})