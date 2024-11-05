import { useRef, useState } from 'react'
import {motion} from 'framer-motion'; 
import * as THREE from 'three'; 
import anime from 'animejs'
import './App.css';

export default function App(){
  const ref = useRef(); 
  return(
    <div ref={ref} className="relative w-[100%] min-h-[100vh] m-[0] p-[0]  ">
    </div>
  )
}