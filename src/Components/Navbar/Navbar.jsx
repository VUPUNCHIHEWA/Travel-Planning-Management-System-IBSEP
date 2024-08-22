import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

    <header className='header'>
        <a href="/" className="logo">Logo</a>
        
        <nav className="navbar">
          
            <a href="/">Home</a>
            <a href="/">Packages</a>
            <a href="/">Guides</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>

            <button class="btn" id = "loginBtn">Sign In</button>
            <button class="btn" id = "registerBtn">Sign Up</button>

        </nav>
    </header>

  )
}

export default Navbar