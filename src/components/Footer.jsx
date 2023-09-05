import React from 'react'
import './Footer.css'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaFacebook, FaTwitter } from 'react-icons/fa'

function Footer() {
    return  (
        <div className = 'footer'>
            <div className = 'footer__container'>
                <div className = 'footer__container__left'>
                    <div className = 'location'>
                        <FaHome size = {20} style = {{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>1002 Iponri Shopping Complex</p>
                            <p>Surulere, Lagos</p>
                            <p>Nigeria.</p>
                        </div>
                    </div>
                    <div className = 'phone'>
                        <h4><FaPhone size = {20} style = {{ color: "#fff", marginRight: "2rem" }} />
                        +2349078106774</h4>
                    </div>
                    <div className = 'email'>
                        <h4><FaMailBulk size = {20} style = {{ color: "#fff", marginRight: "2rem" }} />
                        bashirganiyu@gmail.com</h4>
                    </div>
                </div>
                <div className = 'footer__container__right'>
                    <h4>About Me</h4>
                    <p>My name is Ganiyu Bashir. I am an educationist and freelance web developer.</p>
                    <div className = 'socials'>
                    <FaFacebook size = {30} style = {{ color: "#fff", marginRight: "1rem" }} />
                    <FaTwitter size = {30} style = {{ color: "#fff", marginRight: "1rem" }} />
                    <FaLinkedin size = {30} style = {{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;