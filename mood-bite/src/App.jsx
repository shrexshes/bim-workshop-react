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
  const [selectedMood, setSelectedMood] = useState(null)
  const [customMood, setCustomMood] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [recipes, setRecipes] = useState([])
  const [activeRecipe, setActiveRecipe] = useState(null)


  useEffect(() => {
    // if the api is already stored then dont pop up the ApiSetupKey, and get the key from localstorage and put it in state
    const storedApiKey = localStorage.getItem("apiKey")

    if (storedApiKey) {
      setApiKey(storedApiKey)
      setApiKeyInput(storedApiKey)
      setShowApiSetup(false)
    }
  }, [])

  // save to localstorage
  useEffect(() => { if (apiKey) localStorage.setItem("apiKey", apiKey) }, [apiKey])
  console.log(apiKey)


  // 
  //

  const fetchRecipes = async (moodLabel) => {
    setLoading(true)
    setError("")
    setRecipes([])
    setActiveRecipe(null)

    const prompt = `You are a creative culinary expert. Based on someone feeling ${moodLabel}. right now suggest 2 recipe ideas that match their mood.
    For each recipe, return a JSON object with :
    - name:string(creative recipe name with nepali background)
    - emoji: string(1-2 fitting emoji)
    - description:string (1-2 sentences about why this recipe fits the mood)
    - defficulty: string("Easy","Medium","Hard")
    - cookTime:string(eg:20mins)
    - servings: number
    - ingredients:array of strings(6-8 main ingredients to make the dish)
    - steps:array of strings(5-7 clear cooking steps)
    - moodBoost:string (1 sentence on how this food helps the mood)

    Return only a valid JSON array of 2 recipes, no markdown, no extra text
    `
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", 'X-goog-api-key': apiKey },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.9, maxOutputTokens: 8192 }
        })
      })
      //if error ayo bhane
      if (!response.ok) {
        const err = await response.json()
        console.log(err)
        throw new Error(err.error?.message || "API Request Failed")
      }

      //if success bhayo bhane
      const data = await response.json()
      const text = data.candidates[0]?.content?.parts[0]?.text;
      console.log(text)


      // if the text is null
      if (!text) throw new Error("No response from Gemini")

      //cleaning the response from gemini
      const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()

      const parsed = JSON.parse(cleaned);
      setRecipes(parsed)
      setActiveRecipe(parsed[0])
    } catch (error) {
      setError(error.message || "Something went wrong. Check your api key")
    }
    finally {
      setLoading(false)
    }
  }

  // for ApiSetupKey
  const handleApiKeySubmit = (e) => {
    e.preventDefault(); //this stops the tab from reloading
    if (apiKeyInput.trim()) { // if there is api key then trim()
      setApiKey(apiKeyInput.trim()) // now if there is api key then store them in setApiKey 
      setShowApiSetup(false)
    }
  }

  const handleMoodSelect = (mood) => {
    // this function is used to select the mood from the MOOD json data and if there is anything 
    // typed in cuustom mood then it make it empty
    setSelectedMood(mood)
    setCustomMood("")
    console.log(mood.label)
    fetchRecipes(mood.label)
  }

  const handleCustomMoodSubmit = (e) => {
    //this function is used to select the custom mood
    e.preventDefault()
    if (customMood.trim()) {
      setSelectedMood({ id: "custom", emoji: "custom", label: customMood.trim(), color: "from-violet-400 to-purple-500", bg: "bg-violet-50", border: "border-violet-300" })
      fetchRecipes(customMood.trim())
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

        {/* for loading  */}
        {loading && <h2 className='text-2xl text-white inter'>Loading Recipies according to your mood</h2>}

        {/* if recipes fetch garda error ayo bhanne */}
        {error && (
          <div className='bg-red-100/10 mt-8 border border-red-500/30 rounded-3xl p-6 text-center font-medium inter'>{error}</div>
        )}

        {recipes.map((recipe, index) => (
          <div className='bg-neutral-500 p-6 mt-10 rounded-xl'>
            <h2 className='text-2xl text-white inter font-bold'>{recipe?.emoji}{recipe?.name}</h2>
            <p className='text-sm inter font-white border-t border-t-white mt-6 py-6 text-white '>{recipe?.description}</p>
            <div className='bg-white rounded-full px-6 py-2 w-fit inter'>
              {recipe?.cookTime}
            </div>
            <div className='bg-neutral-200 mt-5 rounded-full px-6 py-2 w-fit inter'>
              {recipe?.defficulty}
            </div>
            <p className='text-sm inter font-white border-t border-t-white mt-6 py-6 text-white '>{recipe?.servings}</p>

            <h2 className='text-2xl text-white inter font-bold mt-10'>Ingredients</h2>
            {recipe.ingredients.map((ingredient, index) => (
              <>
                <ul className='text-white inter'>
                  <li>{index + 1}.  {ingredient}</li>
                </ul>
              </>
            ))}

            <h2 className='text-2xl text-white inter font-bold mt-10'>Steps</h2>

            {recipe.steps.map((step, index) => (
              <>
                <ul className='text-white inter'>
                  <li>{index + 1}.  {step}</li>
                </ul>
              </>
            ))}
          </div>
        ))}

      </main>
    </div>
  )
}

export default App
