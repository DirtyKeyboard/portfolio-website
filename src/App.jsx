import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing"
import About from "./About"
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path ="/about" element={<About />} />
        <Route path ="/projects" element={<Projects />} />
        <Route path ="/blogs" element={<Blogs />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
