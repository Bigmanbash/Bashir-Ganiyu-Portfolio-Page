import React from 'react'
import './HeroImage.css'
import IntroImg from '../assets/working-at-night.jpg'
import { Link } from 'react-router-dom'

function HeroImage() {
    return (
            <div className = 'hero'>
                <div className = 'mask'>
                    <img className = 'intro-img' src = {IntroImg} alt = 'IntroImg' />
                </div>
                <div className = 'content'>
                    <p>HI I'M A FREELANCER</p>
                    <h1>React Developer.</h1>
                    <div>
                        <Link to = '/project' className = 'btn'>PROJECTS</Link>
                        <Link to = '/contact' className = 'btn btn-light'>CONTACT</Link>
                    </div>
                </div>
            </div>
    )
}

export default HeroImage;