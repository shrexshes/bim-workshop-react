import React from 'react'

const Header = ({onChangeApiKey}) => {
    return (
        <header className='border-b border-white/10 sticky top-0 bg-neutral-800 backdrop-blur z-20'>
            <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center inter text-white gap-5'>
                    <h2>Mood Bite</h2>
                </div>
                <div>
                    <button 
                    onClick={onChangeApiKey}
                    className='text-zinc-400 inter hover:text-white text-sm transition-colors'>
                        Change Api Key
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header