import { useCallback, useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'; 
import $ from 'jquery'
import anime from 'animejs'
import axios from 'axios'; 
import * as cheerio from 'cheerio'
import './App.css'

function AddWiki(){
  useEffect(() => {
    const forms = document.getElementById("form"); 
    const input = document.getElementById("article");
    const text = document.getElementById("text") 

    $("#nums h1").empty()
    const requests = document.getElementById("nums"); 
    const limit = document.getElementById("limits")
    
    if(window.localStorage.getItem("request") == null || window.localStorage.getItem("request") == ""){
      window.localStorage.setItem("request", Number.parseInt(0))
    }
    let target = 10;
    if(window.localStorage.getItem("limit") == null || window.localStorage.getItem("limit") == ""){
      window.localStorage.setItem("limit", Number.parseInt(target))
    }

    let num1 = document.createElement("h1"); 
    num1.classList.add("request")
    num1.innerText = window.localStorage.getItem("request")
    requests.appendChild(num1)

    $("#limits h1").empty()
    let num2 = document.createElement("h1");
    num2.classList.add("limit");
    num2.innerText = window.localStorage.getItem("limit") + " "
    limit.appendChild(num2)

    forms.addEventListener("submit", (e) => {
      e.preventDefault()
      const arr = []
      $("#text").empty()

      const link = "https://obj-6ezwxbgcda-uc.a.run.app?text=" + input.value 
      if(window.localStorage.getItem("request") != window.localStorage.getItem("limit") || window.localStorage.getItem("request") < window.localStorage.getItem("limit")){
        axios.get(link, {
          url: link,
          method: "get",
          responseType: "document", 
        }).then((value) => {
          const a = cheerio.load(new XMLSerializer().serializeToString(value["data"]))
          let data = a("body").text()
  
          let x = document.createElement("p")
          x.innerText = data
          text.appendChild(x)
          data = ""
  
          $("#nums h1").empty()
          let target = Number.parseInt(window.localStorage.getItem("request"))
          target += 1
          console.log(target)
          window.localStorage.clear()
  
          num1.innerText = target; 
  
          window.localStorage.setItem("request", target)

        }).catch((err) => {
          alert(err)
        })
      }else{
        alert("requests met or exceed limit")
      }
      input.value = ""
    })
  })
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
      <div className="w-[30%] md:w-[20%] h-[100%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
        <div className="w-[100%] h-[80%] m-auto p-[0] relative bg-transparent " id="history">

        </div>
        <div className="w-[100%] h-[20%] m-auto p-[0] relative bg-transparent flex flex-col align-middle justify-evenly text-center ">
          <div className="w-[100%] h-[50%] relative m-auto p-[0] flex flex-col align-middle justify-center text-center ">

          </div>
          <div className="w-[100%] h-[50%] relative m-auto p-[0] flex flex-col align-middle justify-center text-center ">
            <div className="flex flex-row align-middle justify-center text-center min-h-[fit-content] min-w-[fit-content] ">
              <h1 id="nums" className="text-2xl text-white"></h1>
              <h1 className="text-2xl text-white">/</h1>
              <h1 id="limits" className="text-2xl text-white"></h1>
              <h1 className="text-2xl text-white hidden xl:block">&nbsp; - requests limit </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] md:w-[80%] h-[100%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
        <div className="flex flex-col align-middle justify-center text-center min-w-[100%] min-h-[80%] " id="text"></div>
        <form action="/" id='form' className="w-[100%] h-[5em] m-auto p-[0] relative flex flex-row align-middle justify-center text-center " method="get">
          <input type="text" id="article" className="w-[85%] h-[100%] m-auto p-[0] relative text-center text-3xl text-white border-transparent bg-gradient-to-tr from-sky-700 via-blue-800 to-sky-700 rounded-3xl " placeholder="enter a wikipedia article" />
          <div className="w-[15%] h-[100%] m-auto p-[0] relative flex flex-row align-middle text-center ">
            <motion.button type="submit" initial={{scale: 1}} whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} transition={{type: "spring", duration: 1}} className="w-[fit-content] h-[fit-content] m-auto p-[0] relative flex flex-col align-middle justify-center cursor-pointer text-white text-3xl " >
              <span className="text-5xl text-white cursor-pointer material-symbols-outlined">
                send
              </span>
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default function App(){
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
      <AddWiki></AddWiki>
    </div>
  )
}