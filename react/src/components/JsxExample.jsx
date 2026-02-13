import React from 'react'

const JsxExample = () => {
    // Jsx is a extension for js used in react to write html like code inside Javascript
    const name = "Ayush Shrestha"
    const element = <h1>Hello, my name is {name}!</h1>
    return (
        <div>
            {element}
        </div>
    )
}

export default JsxExample