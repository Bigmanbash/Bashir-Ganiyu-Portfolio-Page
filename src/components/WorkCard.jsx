import React from 'react'
import './WorkCard.css'
//import Project1 from "../assets/javascript-with-laptop-code.jpg"
import { NavLink } from "react-router-dom"

function WorkCard(props) {
    return  (
        <div className = "project__card">
                    <img src = {props.imgsrc} alt = "image" />
                    <h2 className = "project__title">{props.title}</h2>
                    <div className = "project__details">
                        <p>{props.text}</p>
                        <div className = "project__btns">
                            <NavLink to = {props.view} className = "btn">View</NavLink>
                            <NavLink to = "/myGitHubUrl" className = "btn">Source</NavLink>
                        </div>
                    </div>
                </div>
    )
}

export default WorkCard;