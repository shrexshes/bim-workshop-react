import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Navbar from './components/Navbar'
import JsxExample from './components/JsxExample'
import Props from './components/Props'
import UseStateExample from './components/UseStateExample'
import { Counter } from './components/UseRef'
import TernaryOperator from './components/TernaryOperator'
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation'
import UseEffectExample from './components/useEffectExample'
import UseContextApi from './components/UseContextApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>
    <Props name="Ayush"/> 
    <Props name="Joshna"/> 
    <Props name="Smile"/> 
    <JsxExample/>
    <Buttons title="Primary Button"/>
    <Buttons title="Secondary Button"/>
    <UseStateExample/> */}
    {/* <Counter/>   */}
    {/* <TernaryOperator/>
    <ShortCircuitEvaluation/> */}
    {/* <UseEffectExample/> */}
    <UseContextApi/>
    </>
  )
}

export default App
