import './style.css'
import './fire.js'

window.localStorage.setItem("key", 0)
const form = document.getElementById("form")
const input = document.getElementById("article");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})