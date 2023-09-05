import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'
import Image6 from '../assets/camera-phone-laptop-a-photographer-s-desk.jpg'
import Image7 from '../assets/office-computer-screen.jpg'

function AboutContent() {
    return (
        <div className = 'about__content'>
            <div className = 'left'>
                <h1>Who am I?</h1>
                <p>I am React front-end developer. I create responsive secure websites for my clients</p>
                <Link to = '/contact'>
                    <button className = 'btn'>Contact</button>
                </Link>
            </div>
            <div className = 'right'>
                <div className = 'img__container'>
                    <div className = 'img__stack top'>
                        <img src = {Image6} className = "img" alt = "" />
                    </div>
                    <div className = 'img__stack bottom'>
                        <img src = {Image7} className = "img" alt = "" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;