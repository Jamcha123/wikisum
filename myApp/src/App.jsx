import { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'; 
import './App.css';
import axios from 'axios'


function AddNavbar(){
  return(
    <div className="flex flex-row align-middle justify-center text-center min-h-[10vh] min-w-[100%] fixed bg-gray-800 ">
      <div className="w-[50%] lg:w-[50%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center relative ">
        <div className="w-[fit-content] h-[100%] m-0 p-[0] relative flex flex-col align-middle justify-center text-center ">
          <h1 className='text-3xl text-white'>Wikisum </h1>
        </div>
        <div className="min-w-[fit-content] transition-all duration-500 hidden lg:flex  h-[100%] m-0 p-[0] ml-[2%] relative flex-col align-middle justify-center text-center ">
          <h1 className='text-3xl text-white'>- summarize wikipedia</h1>
        </div>
      </div>
      <div className="w-[50%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center relative ">
        <form action="/" id='check' method="get" className="relative w-[10em] h-[10vh] m-auto p-[0] flex flex-col align-middle justify-center ">
          <motion.button type="click" className="w-[5em] h-[5em] m-auto p-[0] bg-gradient-to-tr bg-transparent rounded-3xl text-3xl text-white underline "><a href="https://buy.stripe.com/test_3csg16d9PgcT1HicMP">Donate</a></motion.button>
        </form>
      </div>
    </div>
  )
}
function AddMain(){
  const [active, setActive] = useState(false)
  useEffect(() => {
    document.getElementById("form").addEventListener("submit", (e) => {
      e.preventDefault()
      axios.get("https://en.wikipedia.org", {
        url: "/wiki/" + document.getElementsByTagName("input")[0].value,
        responseType: "text",
        method: "get"
      }).then((value) => {
        console.log(value)
      }).catch((err) => {
        throw new Error(err)
      })
    })
  })
  return(
    <div className="flex flex-col align-middle justify-center text-center min-w-[100%] min-h-[100vh] bg-gray-700 ">
      <motion.div initial={{translateY: -200 + "%"}} animate={{translateY: active? 0 + "%" : -200 + "%"}} transition={{type: "keyframes", duration: 1}} id="text" className="w-[100%] h-[80%] m-auto p-[0] flex flex-col align-middle text-center justify-center transition-all duration-300 ">

      </motion.div>
      <motion.form id='form' initial={{translateY: -200 + "%"}} animate={{translateY: active? 0 + "%" : -200 + "%"}} transition={{type: "keyframes", duration: 1}} action="/" className='w-[100%] h-[20%] m-auto p-[0] flex flex-col align-middle justify-center text-center gap-[10px] transition-all duration-300 ' method="get">
        <div className="w-[75%] h-[5em] m-auto p-[0] flex flex-row align-middle justify-center text-center gap-[20px] bg-slate-800 rounded-2xl ">
          <input type="text" className='w-[75%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center cursor-text bg-transparent border-transparent text-2xl bg-slate-700 text-white  ' id='article'  placeholder='enter a wikipedia article' />
          <div className="w-[25%] h-[5em] m-auto p-[0] relative flex flex-col align-middle justify-center text-center bg-gray-500 rounded-2xl ">
            <motion.button type="submit" onClick={() => setActive(true)} className='w-[100%] h-[100%] m-auto p-[0] relative flex flex-row align-middle justify-center ' >
              <div className="flex flex-col align-middle justify-center w-[fit-content] h-[100%] m-auto p-[0] ">
                <span className="text-6xl text-white material-symbols-outlined ">
                    check
                </span>
              </div>
            </motion.button>
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
      <AddNavbar></AddNavbar>
      <AddMain></AddMain>
    </div>
  )
}