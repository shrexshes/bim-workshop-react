import React, { createContext, useContext, useState } from 'react'

export const GlobalStateContext = createContext(null)

const UseContextApi = () => {
    /*
    The contextapi is a built-in react feature that allows you to pass data through the component tree without having to manually
    pass props down through every level.  Think of it as a global storage sapce for your react application.
    */
    const [isToggle, setIsToggle] = useState(false)
    return (
        <GlobalStateContext.Provider value={{isToggle, setIsToggle}}>
            <div>
                <h1>Parent Component</h1>
                <ChildToggle />
                <ChildDisplay/>
            </div>
        </GlobalStateContext.Provider>
    )
}

const ChildToggle = () => {
    const {setIsToggle}=useContext(GlobalStateContext)
    return (
        <>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
        </>
    )
}

const ChildDisplay = () => {
     const {isToggle}=useContext(GlobalStateContext)
    return (
        <>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </>
    )
}
export default UseContextApi