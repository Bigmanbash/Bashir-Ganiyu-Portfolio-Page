import React from 'react'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
        <Router basename={import.meta.env.DEV ? '/' : '/Bashir-Ganiyu-Portfolio-Page/'}>
            <Routes>
                <Route path = '/' element = { <Home /> } />
                <Route path = '/about' element = { <About /> } />
                <Route path = '/project' element = { <Project /> } />
                <Route path = '/contact' element = { <Contact /> } />
            </Routes>
        </Router>
  )
}

export default App
