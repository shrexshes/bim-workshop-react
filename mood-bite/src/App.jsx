import { useState } from 'react'
import './App.css'

function App() {
  const [showApiSetup,setShowApiSetup]=useState(true)

  if(showApiSetup){
    return(
     <div className='min-h-screen bg-neutral-900'>
      <div className='max-w-3xl py-30 mx-auto z-10'>
        <div className='bg-white p-10 flex items-center flex-col border-2 border-neutral-300 rounded-3xl space-y-3'>
          <h1 className='inter text-3xl font-bold'>Mood Bite</h1>
          <p className='inter text-lg'>Get your delicious food recipe according to your mood.</p>

        </div>
      </div>
     </div>
    )
  }

  return (
    <>
      <h1 className='text-4xl'>Mood Bite</h1>
    </>
  )
}

export default App
