import { useEffect, useState } from 'react'
import './App.css'
import ApiSetupKey from './components/ApiSetupKey'
import Header from './components/Header'
import HeroText from './components/HeroText'
import MoodSelector from './components/MoodSelector'

const MOODS = [
  { id: "happy", emoji: "😄", label: "Happy", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-300" },
  { id: "cozy", emoji: "🧸", label: "Cozy", color: "from-amber-400 to-brown-400", bg: "bg-amber-50", border: "border-amber-300" },
  { id: "adventurous", emoji: "🌍", label: "Adventurous", color: "from-green-400 to-teal-500", bg: "bg-green-50", border: "border-green-300" },
  { id: "romantic", emoji: "💕", label: "Romantic", color: "from-pink-400 to-rose-500", bg: "bg-pink-50", border: "border-pink-300" },
  { id: "stressed", emoji: "😤", label: "Stressed", color: "from-purple-400 to-indigo-500", bg: "bg-purple-50", border: "border-purple-300" },
  { id: "sad", emoji: "😔", label: "Sad", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-300" },
  { id: "energetic", emoji: "⚡", label: "Energetic", color: "from-red-400 to-orange-500", bg: "bg-red-50", border: "border-red-300" },
  { id: "lazy", emoji: "🛋️", label: "Lazy", color: "from-slate-400 to-gray-500", bg: "bg-slate-50", border: "border-slate-300" },
];

function App() {
  const [apiKeyInput, setApiKeyInput] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [showApiSetup, setShowApiSetup] = useState(true)
  const [selectedMood,setSelectedMood]=useState(null)
  const [customMood, setCustomMood]=useState("")
  const [loading,setLoading]=useState(false)

  // for ApiSetupKey
  const handleApiKeySubmit = (e) => {
    e.preventDefault(); //this stops the tab from reloading
    if (apiKeyInput.trim()) { // if there is api key then trim()
      setApiKey(apiKeyInput.trim()) // now if there is api key then store them in setApiKey 
      setShowApiSetup(false)
    }
  }

  const handleMoodSelect=(mood)=>{
    // this function is used to select the mood from the MOOD json data and if there is anything 
    // typed in cuustom mood then it make it empty
    setSelectedMood(mood)
    setCustomMood("")
    //fetchRecipe -> TODO -> To fetch recipes from gemini
  }

  const handleCustomMoodSubmit=(e)=>{
    //this function is used to select the custom mood
    e.preventDefault()
    if(customMood.trim()){
      setSelectedMood({id:"custom",emoji:"custom",label:customMood.trim(),color:"from-violet-400 to-purple-500",bg:"bg-violet-50",border:"border-violet-300"})

      // fetchRecipies -> TODO -> To fetch recipes from gemini for custom mood

    }
  }

  if (showApiSetup) {
    return (
      <ApiSetupKey onSubmit={handleApiKeySubmit} setApiKeyInput={setApiKeyInput} apiKeyInput={apiKeyInput} />
    )
  }

  return (
    <div className='bg-neutral-800'>
      <Header onChangeApiKey={() => { setShowApiSetup(true); setApiKeyInput(""); }} />
      <main className='max-w-6xl mx-auto px-4 py-10'>
        <HeroText />
        <MoodSelector
        moods={MOODS}
        selectedMood={selectedMood}
        customMood={customMood}
        setCustomMood={setCustomMood}
        onMoodSelect={handleMoodSelect}
        onCustomSubmit={handleCustomMoodSubmit}
        loading={loading}
        />
      </main>
    </div>
  )
}

export default App
