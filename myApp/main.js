import './style.css'
import './fire.js'

const form = document.getElementById("form")
const input = document.getElementById("article");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value){
        window.location.href = "https://obj-288814584965.us-central1.run.app/?names=" + input.value;
        input.value = ""
    }
})