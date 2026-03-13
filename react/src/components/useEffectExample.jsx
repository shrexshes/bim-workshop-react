import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    /*
    Syntax of UseEffect
    useEffect(effect,[dependencies])

    UseEffect in simple terms means (DO THIS WHEN THINGS CHANGE)
    This Hook performs side effect in function in components. Side Effects are operation that 
    interact witht the outside world like fetching data,setting up substription or directly
    manipulating dom
    */

    const [data, setData] = useState([])
    const [showAyush, setShowAyush] = useState(false)
    useEffect(() => {

        async function dataFetchJson() {
            const dataJson = await fetch("https://jsonplaceholder.typicode.com/posts/")
            const result = await dataJson.json()
            console.log(result)
            setData(result)
        }
        dataFetchJson()
    }, [])

    useEffect(() => {
        console.log("Ayush")
    }, [showAyush])

    return (
        <div>
            <h1>Use Effect Example</h1>
            <ul>
                {data.map((item) => (
                    <li className='px-2 text-sm underline'>- {item.title}</li>
                ))}
            </ul>
            <button onClick={() => setShowAyush(!showAyush)}>
                Toogle
            </button>
        </div>
    )
}

export default UseEffectExample