import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'; 
import $ from 'jquery'
import anime from 'animejs'
import './App.css'

function AddWiki(){
  const [active, setActive] = useState(true); 
  useEffect(() => {
    const forms = document.getElementById("form"); 
    forms.addEventListener("submit", (e) => {
      e.preventDefault(); 
      document.getElementById("arrow").classList.add("change"); 
    })
  })
  return(
    <div className="relative w-[75%] h-[100vh] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
      <motion.div id="box" initial={{height: 10 + "vh"}} animate={{height: active? 80 + "vh" : 10 + "vh"}} transition={{type: "keyframes", duration: 2}} className="w-[85%] h-[10vh] m-0 p-[0] relative flex flex-col align-middle justify-center text-center bg-slate-800 ">
        <div className="flex flex-row align-middle justify-center text-center w-[100%] h-[10vh] m-auto p-[0] ">
          <div className="w-[75%] h-[100%] mt-[0%] m-auto p-[0] relative flex flex-row align-middle justify-center text-center ">
            <div className="w-[fit-content] h-[100%] m-0 lg:ml-[10%] p-[0] flex flex-col align-middle justify-center text-center">
              <h1 className='text-3xl text-white'>WikiSum</h1>
            </div>
            <div className="w-[fit-content] h-[100%] m-0 ml-[2%] p-[0] hidden lg:flex flex-col align-middle justify-center text-center ">
              <h1 className="text-3xl text-white"> - Wikipedia summarizer</h1>
            </div>
          </div>
          <div className="w-[25%] h-[100%] mt-[0%] m-auto p-[0] relative flex flex-col align-middle justify-center text-center ">
            <motion.span initial={{rotateZ: 0 + "deg"}} animate={{rotateZ: active? 180 + "deg" : 0 + "deg"}} transition={{type: "spring", duration: 2}} id="arrow" onClick={active? () => setActive(false) : () => setActive(true)} className="text-6xl cursor-pointer rounded-full w-[fit-content] h-[fit-content] m-auto p-[0] text-white material-symbols-outlined">
                  keyboard_arrow_down
            </motion.span>
          </div>
        </div>
        <motion.div id="text" style={{display: active? "flex" : "none"}} initial={{scaleY: 0}} animate={{scaleY: active? 1 : 0}} transition={{type: "keyframes", duration: 2}} className="w-[100%] h-[80vh] m-auto p-[0] relative bg-transparent flex flex-col align-middle justify-center text-center bg-slate-600 ">

        </motion.div>
      </motion.div>
      <motion.div className="w-[85%] min-h-[10vh] max-h-[fit-content] m-0 p-[0] relative flex flex-row align-middle justify-center text-center bg-slate-600 ">
        <form action="/" method='get' id='form' className="w-[100%] h-[10vh] m-auto p-[0] relative flex flex-row align-middle justify-center text-center">
            <input type="text" placeholder="enter a wikipedia article" className="w-[75%] h-[100%] m-auto p-[0] relative text-center text-2xl text-white bg-transparent "  id="article" />
            <input type="submit" value="Submit" id='submit' className="w-[25%] h-[100%] cursor-pointer m-auto p-[0] relative text-center text-2xl text-white border-[1px] border-white" />
        </form>
      </motion.div>
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