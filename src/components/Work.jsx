import React from 'react'
import './WorkCard.css'
//import Project1 from "../assets/javascript-with-laptop-code.jpg"
//import { NavLink } from "react-router-dom"
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
    return  (
        <div className = 'work__container'>
            <h1 className = "project__heading">Projects</h1>
            <div className = "project__container">
                {WorkCardData.map((val, ind) => {
                    return  (
                        <WorkCard 
                            key = {ind}
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            text = {val.text}
                            view = {val.view}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}

export default Work;