import { useEffect, useState } from 'react'
import axios from 'axios'
import * as cheerio from 'cheerio'
import './App.css'
import $ from 'jquery'

function AddForm(){
  useEffect(() => {
    const form = document.getElementById("form"); 
    const input = document.getElementById("article"); 

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if(input.value){
        const link = "http://localhost:5173/api?text=" + input.value + "";
        axios.get(link, {
          url: link,
          method: "get", 
          responseType: "document",
        }).then((value) => {
          const $ = cheerio.load(value["data"]);
          console.log(value["data"])

          const words = $("h1").text();
          console.log(words)

          let x = document.createElement("h1");
          x.classList.add("items");
          x.innerText = value["data"]
          document.getElementById("summary").appendChild(x);

        })
        input.value = ""
      }
    })
  })
  return(
    <form action="" method='get' id='form' className="w-[45em] h-[75%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
      <div className="w-[100%] h-[80%] m-auto p-[0] relative flex flex-col align-middle justify-centere text-center bg-slate-700 " id='summary'></div>
      <div className="w-[100%] h-[20%] m-auto p-[0] relative flex flex-row align-middle justify-centere text-center bg-transparent ">
        <input type="text" id="article" placeholder="enter the wikipedia article" className="w-[75%] h-[100%] m-auto p-[0] relative flex flex-row align-middle justify-center text-center bg-slate-600 text-white text-2xl border-transparent  " />
        <input type="submit" name="text" id="submit" value="summarize" className="w-[25%] h-[100%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center bg-slate-900 text-white text-2xl border-transparent "  />
      </div>
    </form>
  )
}
export default function App(){
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
      <AddForm></AddForm>
    </div>
  )
}