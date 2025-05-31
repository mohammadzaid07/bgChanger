import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("rgb(255 255 255)")
  return (
    <>
      <div className='flex flex-col items-center justify-end w-screen h-screen duration-600' style={{ backgroundColor: color }}>
        <div className='bg-white h-20 w-300 rounded-full flex flex-row items-center justify-center gap-15 mb-10 shadow-md shadow-gray-500 border-1 border-gray-400'>
          <button
            onClick={() => setColor("rgb(239 68 68)")} className='p-3 rounded-full w-20 cursor-pointer bg-red-500 shadow-md shadow-red-900'>Red</button>
          <button
            onClick={() => setColor("rgb(34 197 94)")} className='p-3 rounded-full w-20 cursor-pointer bg-green-500 shadow-md shadow-green-900'>Green</button>
          <button
            onClick={() => setColor("rgb(59 130 246)")} className='p-3 rounded-full w-20 cursor-pointer bg-blue-500 shadow-md shadow-blue-900'>Blue</button>
          <button
            onClick={() => setColor("rgb(234 179 8)")} className='p-3 rounded-full w-20 cursor-pointer bg-yellow-500 shadow-md shadow-yellow-900'>Yellow</button>
          <button
            onClick={() => setColor("rgb(236 72 153)")} className='p-3 rounded-full w-20 cursor-pointer bg-pink-500 shadow-md shadow-pink-900'>Pink</button>
          <button
            onClick={() => setColor("rgb(249 115 22)")} className='p-3 rounded-full w-20 cursor-pointer bg-orange-500 shadow-md shadow-orange-900'>Orange</button>
          <button
            onClick={() => setColor("rgb(0 0 0)")}
            className='p-3 rounded-full w-20 bg-black cursor-pointer text-white shadow-md shadow-gray-900'>Black</button>
          <button
            onClick={() => setColor("rgb(255 255 255)")} className='p-3 rounded-full w-20 bg-white cursor-pointer border-1 border-gray-400 shadow-md shadow-gray-900'>White</button>
        </div>
      </div>
    </>
  )
}
export default App