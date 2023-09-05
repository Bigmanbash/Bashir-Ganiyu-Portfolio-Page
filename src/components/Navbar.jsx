import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

    const [clickHamburger, setClickHamburger] = useState(false)
    function handleClickHamburger() {
        setClickHamburger(!clickHamburger)
    }


    const [color, setColor] = useState(false)
    function changeColor() {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className = {color ? 'navbar navbar-bg' : 'navbar'}> 
            <Link to = '/'>
                <h1>Portfolio</h1>
            </Link>
            <ul className = { clickHamburger ? 'navbar__menu active' : 'navbar__menu'}>
                <li>
                    <Link to = '/'>Home</Link> 
                </li>
                <li>
                    <Link to = '/project'>Project</Link>
                </li>
                <li>
                    <Link to = '/about'>About</Link>
                </li>
                <li>
                    <Link to = '/contact'>Contact</Link>
                </li>
            </ul>
            <div className = 'navbar__hamburger' onClick = { handleClickHamburger }>
                { clickHamburger ? ( <FaTimes size = {20} style = {{ color: "#fff" }}/> ) : ( <FaBars size = {20} style = {{ color: "#fff" }}/> ) }
            </div>
        </div>
    )
}

export default Navbar;