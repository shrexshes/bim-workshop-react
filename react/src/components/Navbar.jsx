import React from 'react'

const Navbar = () => {
    return (
        <div style={{ width: "100%", backgroundColor: "red",display:"flex",gap:"20px",padding:"10px" }}>
           <a>Home</a>
           <a>About us </a>
           <a>Contact Me</a>
           <a>More</a>
        </div>
    )
}

export default Navbar