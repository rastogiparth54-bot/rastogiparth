import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul className="nav-links">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/studentregistration">StudentRegistration</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>


    </div>
  )
}

export default Nav