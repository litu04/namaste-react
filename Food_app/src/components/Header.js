import React from 'react'

const Title = () => (
    <a href="/">
        <img className="logo" src="https://github.com/chetannada/Namaste-React/blob/main/Chapter%2004%20-%20Talk%20is%20Cheap,%20show%20me%20the%20code/Images/Food%20Fire%20Logo.png?raw=true" alt="Food Villa" />
    </a>
)

const Header = () => {
  return (
    <div className="header">
        <Title/>  
        <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
  )
}

export default Header