import React, { useState } from 'react'
import { Link } from "react-router-dom"
//logo will always be default imported
import logo from "../assets/img/foodvilla.png"

const Title = () => (
    <Link to="/">
        <img className="logo" src={logo} alt="logo" />
    </Link>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="header">
        <Title/>  
        <ul className="nav-items">
            <li>Home</li>
            <Link to="/about"><li>About</li></Link>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        {isLoggedIn ? (<button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>) : (<button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>)}
    </div>
  )
}

export default Header