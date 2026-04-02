import React from 'react'

const MoodSelector = ({ moods, selectMood, customMood, setCustomMood, onMoodSelect, onCustomSubmit, loading }) => {
    return (
        <div className='space-y-6'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                {moods.map((mood) => (
                    <button key={mood.id}
                        onClick={() => !loading && onMoodSelect(mood)}
                        disabled={loading}
                        className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl

                ${selectMood?.id === mood.id ? `bg-gradient-to-br${mood.color} border-transparent shadow-lg scale-105`
                                : `bg-white/5 border-white/20 hover:border-white/20`
                            }`}
                    >
                        <div className='text-3xl mb-2'>{mood.emoji}</div>
                        <div className={`font-bold inter text-sm ${selectMood?.id === mood.id ? "text-white" : "text-zinc-200"}`}>
                            {mood.label}
                        </div>


                    </button>
                ))}
            </div>


            {/* CUSTOM MOOD */}
            <div className='flex items-center gap-3'>
                <div className='flex-1 h-px bg-white/10'></div>
                <span className='text-zinc-500 text-sm inter'>or describe your mood</span>
                <div className='flex-1 h-px bg-white/10'></div>
            </div>

            <form onSubmit={onCustomSubmit} className='flex gap-3'>
                <input
                    type='text'
                    value={customMood}
                    onChange={(e) => setCustomMood(e.target.value)}
                    placeholder='e.g..nostaligic, rebellious, childhood memories'
                    disabled={loading}
                    className='flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-orange-400 transition-colors text-sm '
                />

                <button
                    type='submit'
                    disabled={!customMood.trim() || loading}
                    className='bg-gradient-to-r inter from-orange-400 to-rose-500 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 text-sm whitespace-nowrap'>
                    GET RECIPE
                </button>
            </form>
        </div>
    )
}

export default MoodSelector