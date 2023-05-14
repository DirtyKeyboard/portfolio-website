import React, { useState } from 'react'
import NavBar from './NavBar'
import { Divider } from 'semantic-ui-react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard';
import bosslogo from './assets/logo.png'
import ftrlogo from './assets/chefhatIcon.png'
import coffee from './assets/coffee.png'
import money from './assets/money.jpg'
import music from './assets/music.jpg'
import { Button } from 'semantic-ui-react'

const Projects = () => {
  const [video, setVideo] = useState(null)
  return (
    <>
      <NavBar />
      <motion.div className='absCtr'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opcaity: 0}}
      >


        {video ?
          <div style={{ display: 'flex', width: '70vw', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '3vh' }}>
            <iframe title="Video Showcase" src={video}
              frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ width: '70vw', height: '80vh' }}></iframe>
            <Button inverted color='teal' size="huge" onClick={() => setVideo(null)}>Hide Video</Button>
          </div>
          :
          <>
            <Divider inverted horizontal style={{ paddingLeft: '6vw', paddingRight: '6vw' }}>
              <h1 className='header' style={{ fontSize: '10vh' }}>PROJECTS</h1>
            </Divider>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', flexWrap: 'wrap', width: '80vw' }}>
              <ProjectCard
                image={bosslogo}
                title="Best One Stop Shop"
                preview="This application allowed the purchase and publishing of car listings, using a local rest API to keep changes persistent"
                link="https://github.com/DirtyKeyboard/phase-1-project"
                video="https://www.loom.com/embed/08f65f64f9334ce694063cbb34b04d7a"
                setVideo={setVideo}
                langs={["js", "html5", "css3"]} /> {/* image, title, preview, link */}
              <ProjectCard
                image={ftrlogo}
                title="Find That Recipe"
                preview="Uses a public API along with a local hosted rest API to search through food recipes and save them to your favorites"
                link="https://github.com/DirtyKeyboard/phase-2-project"
                video="https://www.loom.com/embed/ca18dc6581934f42993e7e9e3613707e"
                setVideo={setVideo}
                langs={["react", "js", "html5", "css3"]} /> {/* image, title, preview, link */}
              <ProjectCard
                image={coffee}
                title="Coffee Generator"
                preview="Uses hard-coded data to generate a random drink. Includes hot/cold coffee, teas, etc."
                link="https://github.com/DirtyKeyboard/coffee-generator/"
                site="https://coffee.andrewhawileh.com/"
                langs={["react", "js", "html5", "css3"]} /> {/* image, title, preview, link */}
              <ProjectCard
                image={money}
                title="Finance Tracker"
                preview="Uses python and SQLAlchemy to keep track of your finances, offer budget suggestions, and export your finances to a pdf file"
                link="https://github.com/DirtyKeyboard/phase-3-project"
                video="https://www.loom.com/embed/87a5178acaea437784984004332921c0"
                setVideo={setVideo}
                langs={["python"]} /> {/* image, title, preview, link */}
                <ProjectCard
                image={music}
                title="Beat Buddy"
                preview="Predicts a users favorite music genre by having them take a quiz, and then assigns them a genre to their account, so they can generate random songs in that genre,
                and save them to their playlist. Users can also share songs that they liked through the forum pages."
                link="https://github.com/DirtyKeyboard/phase-4-project"
                site="https://beatbuddy.andrewhawileh.com/"
                langs={["js", "react", "python", "flask"]} /> {/* image, title, preview, link */}
            </div>
          </>}


      </motion.div>
    </>
  )
}

export default Projects

