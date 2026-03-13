import React, { useState } from 'react'

const UseStateExample = () => {
    // const [state,setState]=useState(initial value)
    const [count,setCount]=useState(0)
    console.log(count)
  return (
    <div className='bg-blue-400 p-5'>
        <p className='text-4xl font-bold italic'>UseState Example </p>

        <p className='text-4xl bg-indigo-300 w-30 h-30 flex items-center px-12 m-4'>{count}</p>
        <button
        onClick={()=>setCount(count+1)}
         className='bg-yellow-400 px-5 py-2 rounded-md font-mono m-5'>Increase +</button>

        <button
        onClick={()=>setCount(count-1)}
         className='bg-rose-400 px-5 py-2 rounded-md font-mono m-5'>Decrease -</button>
    </div>
  )
}

export default UseStateExample