import { useState } from "react"

export default function App()
{
  const [color,setColor]=useState()
  const changeColor=(color)=>{
    setColor(color)
  }
  return(
    <div className="h-screen w-screen" style={{backgroundColor:color}}>
    <div className=" flex rounded-full content-center justify-center space-x-5 bg-white w-7/12 absolute bottom-3 left-[250px] p-3 mx-auto">
    <button onClick={()=>changeColor('#DC2626')} className="bg-red-600 rounded-full text-center text-white px-3  py-1">Red</button>
    <button onClick={()=>changeColor('#16A34A')} className="bg-green-600 rounded-full text-center text-white px-3  py-1">Green</button>
    <button onClick={()=>changeColor('#2563EB')} className="bg-blue-600 rounded-full text-center text-white px-3  py-1">Blue</button>
    <button onClick={()=>changeColor('#B45309')} className="bg-amber-700	 rounded-full text-center text-white px-3  py-1">Amber</button>
    <button onClick={()=>changeColor('black')} className="bg-black rounded-full text-center text-white px-3  py-1">black</button>
    <button onClick={()=>changeColor('#4B5563')} className="bg-gray-600 rounded-full text-center text-white px-3  py-1">Gray</button>
    <button onClick={()=>changeColor('#CA8A04')} className="bg-yellow-600 rounded-full text-center text-white px-3  py-1">Yellow</button>
    <button onClick={()=>changeColor('#DB2777')} className="bg-pink-600 rounded-full text-center text-white px-3  py-1">Pink</button>
    <button onClick={()=>changeColor('#EA580C')} className="bg-orange-600 rounded-full text-center text-white px-3  py-1">Orange</button>
    </div>
    </div>
  )
}