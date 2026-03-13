import React from 'react'

const Navbar = () => {
    /* tailwind 
    for background color: bg-color-intensity
    for padding: px for right and left , py for top and bottom , pt for top , pb for bottom ,p for everywhere
    for margin: 
    for text color: text-red-400 (text-color-intensity)
    for flexbox : flex gap-5 justify-center items-center
    for max width
    for animation : use animate-bounce , animate-spin, animate-pulses
    for font: font-

    */
    return (
        <div className='bg-emerald-600 '>
            <div className="px-10 py-5 flex items-center gap-10 text-xl font-mono text-white">
                <p className='hover:underline'>Home</p>
                <p className='hover:underline'>About us </p>
                <p className='hover:underline'>Contact Me</p>
                <p className='hover:underline'>More</p>
            </div>
        </div>
    )
}

export default Navbar