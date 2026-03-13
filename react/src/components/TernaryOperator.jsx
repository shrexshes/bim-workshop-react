import React, { useState } from 'react'

const TernaryOperator = () => {
  // Ternary Operator is shorthand for if-else statement and is often used in jsx
    const [isLoggedIn ,setIsLoggedIn]=useState(false)
  return (
    <div>
        {isLoggedIn ? "Welcome User" : "You are not logged in"}
        <button className='px-6 bg-purple-500 text-white rounded-full py-2 hover:bg-green-500 cursor-pointer ' 
        onClick={()=>setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log out" : "Login"}
        </button>
    </div>
  )
}

export default TernaryOperator