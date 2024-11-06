import { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'; 
import * as THREE from 'three'; 
import anime from 'animejs'
import axios from 'axios';
import http from 'https'
import './App.css';

function AddHistory(){
  return(
    <div className="flex flex-col align-middle justify-center text-center min-h-[100vh] min-w-[20%] bg-gray-900 ">

    </div>
  )
}
function AddMain(){
  const [active, setActive] = useState(false)
  useEffect(() => {
    const form = document.getElementById("form"); 
    const input = document.getElementById("article");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      if(input.value){
        let url = "https://en.wikipedia.org/wiki/" + input.value + "";
        axios.get("https://en.wikipedia.org", {
          url: "/wiki/" + input.value,
          method: "get",
        }).then((value) => {
          console.log(value)
        })
      }
    })
  })
  return(
    <div className="flex flex-col align-middle justify-center text-center min-w-[100%] min-h-[100vh] bg-gray-800 ">
      <motion.div initial={{translateY: -200 + "%"}} animate={{translateY: active? 0 + "%" : -200 + "%"}} transition={{type: "keyframes", duration: 1}} id="text" className="w-[100%] h-[80%] m-auto p-[0] flex flex-col align-middle text-center justify-center transition-all duration-300 ">

      </motion.div>
      <motion.form id='form' initial={{translateY: -200 + "%"}} animate={{translateY: active? 0 + "%" : -200 + "%"}} transition={{type: "keyframes", duration: 1}} action="/" className='w-[100%] h-[20%] m-auto p-[0] flex flex-col align-middle justify-center text-center gap-[10px] transition-all duration-300 ' method="get">
        <div className="w-[75%] h-[5em] m-auto p-[0] flex flex-row align-middle justify-center text-center gap-[20px] bg-slate-700 rounded-2xl ">
          <input type="text" className='w-[75%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center cursor-text bg-transparent border-transparent text-2xl bg-slate-700 text-white  ' id='article'  placeholder='enter a wikipedia article' />
          <div className="w-[25%] h-[5em] m-auto p-[0] relative flex flex-col align-middle justify-center text-center bg-gray-600 rounded-2xl ">
            <input type="submit" value="submit" id='submit' />
          </div>
        </div>
      </motion.form>
    </div>
  )
}
export default function App(){
  const ref = useRef(); 
  return(
    <div ref={ref} className="relative w-[100%] min-h-[100vh] m-[0] p-[0] flex flex-row align-middle justify-center text-center  ">
      <AddMain></AddMain>
    </div>
  )
}