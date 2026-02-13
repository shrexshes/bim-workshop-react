import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Navbar from './components/Navbar'
import JsxExample from './components/JsxExample'
import Props from './components/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Props name="Ayush"/> 
    <Props name="Joshna"/> 
    <Props name="Smile"/> 
    <JsxExample/>
    <Buttons title="Primary Button"/>
    <Buttons title="Secondary Button"/>
    </>
  )
}

export default App
