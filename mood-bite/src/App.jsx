import { useState } from 'react'
import './App.css'
import ApiSetupKey from './components/ApiSetupKey'
import Header from './components/Header'

function App() {
  const [apiKeyInput,setApiKeyInput]=useState("")
  const [apiKey,setApiKey]=useState("")
  const [showApiSetup,setShowApiSetup]=useState(true)
  
  // for ApiSetupKey
  const handleApiKeySubmit=(e)=>{
    e.preventDefault(); //this stops the tab from reloading
    if(apiKeyInput.trim()){ // if there is api key then trim()
      setApiKey(apiKeyInput.trim()) // now if there is api key then store them in setApiKey 
      setShowApiSetup(false)
    }
  }

  if(showApiSetup){
    return(
     <ApiSetupKey onSubmit={handleApiKeySubmit} setApiKeyInput={setApiKeyInput} apiKeyInput={apiKeyInput}/>
    )
  }

  return (
    <>
      <Header onChangeApiKey={()=>{setShowApiSetup(true); setApiKeyInput("");}}/>
    </>
  )
}

export default App
