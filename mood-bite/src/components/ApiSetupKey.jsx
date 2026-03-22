import React from 'react'

const ApiSetupKey = ({apiKeyInput,setApiKeyInput,onSubmit}) => {
    return (
        <div className='min-h-screen bg-neutral-900'>
            <div className='max-w-3xl py-30 mx-auto z-10'>
                <div className='bg-white p-10 flex items-center flex-col border-2 border-neutral-300 rounded-3xl space-y-3'>
                    <h1 className='inter text-3xl font-bold'>Mood Bite</h1>
                    <p className='inter text-lg'>Get your delicious food recipe according to your mood.</p>
                    <div className='text-center'>
                        <h2 className='text-neutral-900 inter font-bold text-xl pt-5 mb-2'>Enter Your Gemini Api Key</h2>
                        <p className='font-light inter text-center italic'>Get your free api key
                            <a target='_blank'
                            href='https://aistudio.google.com'>
                                aistudio.google.com
                            </a>
                        </p>

                        {/* to make a form for api key */}
                        <form onSubmit={onSubmit} className='space-y-4'>
                            <input
                            type='password'
                            value={apiKeyInput}
                            onChange={(e) => setApiKeyInput(e.target.value)}
                            placeholder='AiZxak....'
                            className='w-full bg-neutral-100 border border-white/20 rounded-xl px-4 py-2 inter mt-4'
                            />

                            <button
                            type='submit'
                            disabled={!apiKeyInput.trim()}
                            className='w-full bg-gradient-to-r from-orange-200 py-4 rounded-full font-bold to-rose-600 text-white inter'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ApiSetupKey