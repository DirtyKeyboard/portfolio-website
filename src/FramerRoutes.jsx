import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Landing"
import About from "./About"
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'
import WIP from './WIP'
import RouteNotFound from './RouteNotFound';


const FramerRoutes = () => {
    const location = useLocation();
    return (
    <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/wip" element={<WIP/>} />
        <Route path ="/about" element={<About />} />
        <Route path ="/projects" element={<Projects />} />
        <Route path ="/blogs" element={<Blogs />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path="/*" element={<RouteNotFound />}/>
    </Routes>
    )
}

export default FramerRoutes