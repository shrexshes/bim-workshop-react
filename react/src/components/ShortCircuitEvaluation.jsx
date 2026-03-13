import React, { useState } from 'react'

const ShortCircuitEvaluation = () => {
    // short circuit evaluation involves using logical operators ( && and ||) to render elements conditionally 
    // This is useful for simple conditions where you only want to render something when the condition
    // is true and do nothing when its false
    const [hasNotification,setHasNotification]=useState(false)
  return (
    <div>
        {hasNotification && <p className='italic text-2xl'>You have a new Message !</p>}
        <button className='bg-neutral-600 text-white px-4 py-2 ' onClick={()=>setHasNotification(!hasNotification)}>
            Toggle Message
        </button>
    </div>
  )
}

export default ShortCircuitEvaluation