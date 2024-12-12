import { useCallback, useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'; 
import $ from 'jquery'
import anime from 'animejs'
import axios from 'axios'; 
import * as cheerio from 'cheerio'
import './App.css'
import {loadStripe} from '@stripe/stripe-js'
import {EmbeddedCheckout, EmbeddedCheckoutProvider} from '@stripe/react-stripe-js'

function AddCheckout(){
  const stripe = loadStripe("<stripe-public>");
  const [showCheckout, setShowCheckout] = useState(false); 

  const fetchClientSecret = useCallback(() => {
    return fetch("/create-checkout-session", {
      method: "POST", 
    })
    .then((res) => res.json())
    .then((data) => data.clientSecret)
  }, [])
  const options = {fetchClientSecret}
  return(
    <div id="checkout">
      <EmbeddedCheckoutProvider>
        <EmbeddedCheckout options={options} stripe={stripe} >

        </EmbeddedCheckout>
      </EmbeddedCheckoutProvider>
    </div>
  )
}

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
    num1.classList.add("request")pk_live_51NYC8xBJFXFW6fU3h5DOyfxZggOmY3VavLLSMVtxgvTP0UOMW7UjfxiSHvebmAmWqfgYDKkfpeloYYmzkp0GF62m00RcoSH04U
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
    const checkout = document.getElementById("checkout"); 
    checkout.addEventListener("submit", (e) => {
    })
  })
  return(
    <div className="relative w-[100%] h-[75vh] overflow-hidden m-auto p-[0] flex flex-col align-middle justify-center text-center ">
      <div className="w-[75%] h-[100%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
        <div className="w-[100%] h-[90%] m-auto p-[0] relative bg-transparent flex flex-col align-middle justify-center text-center ">
          <div className="w-[100%] h-[25%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
            <div className="w-[100%] h-[50%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
              <h1 className="text-3xl text-white">WikiSum - Be patient </h1>
            </div>
            <div className="w-[100%] h-[50%] m-auto p-[0] relative flex flex-col md:flex-row align-middle justify-center text-center ">
              <form action="" method="get" className="w-[100%] md:w-[50%] h-[50%] md:h-[100%] m-auto p-[0] relative cursor-pointer flex flex-col align-middle justify-center" id="checkout">

              </form>

              <div className="flex flex-col align-middle justify-center text-center w-[100%] md:w-[50%] h-[50%] md:h-[100%] m-auto p-[0] relative ">
                <div className="flex flex-row align-middle justify-center text-center w-[100%] h-[fit-content] m-auto p-[0] relative ">
                  <div className="w-[fit-content] overflow-hidden transition-all duration-500 h-[fit-content] m-0 p-[0] relative flex flex-col align-middle justify-center text-center " id="nums">

                  </div>
                  <h1 className="text-2xl text-white">/</h1>
                  <div className="w-[fit-content] overflow-hidden transition-all duration-500 h-[fit-content] m-0 p-[0] relative flex flex-col align-middle justify-center text-center " id="limits">

                  </div>
                  <h1 className="text-2xl text-white">&nbsp;</h1>
                  <h1 className="text-2xl text-white"> - Requests</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[75%] m-auto p-[0] relative overflow-y-scroll md:overflow-hidden flex flex-col align-middle justify-center text-center " id="text">
            
          </div>
        </div>
        <form action="" id="form" method="get" className="w-[100%] h-[10%] m-auto p-[0] relative flex flex-row align-middle justify-center text-center ">
          <input type="text" name="article" id="article" placeholder="enter a wikipedia article" className="w-[75%] text-center bg-slate-700 h-[100%] m-auto p-[0] relative text-3xl text-white " />
          <motion.button initial={{scale: 1}} whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} id="submit" type="submit" className="w-[25%] h-[100%] bg-slate-800 m-auto p-[0] relative text-3xl text-white cursor-pointer ">
            <span className="cursor-pointer text-5xl text-white material-symbols-outlined">
              send
            </span>
          </motion.button>
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