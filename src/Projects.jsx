import React from 'react'
import NavBar from './NavBar'
import {Header} from 'semantic-ui-react'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      <Header as='h1' style={{fontSize: '6vh'}} inverted>Projects</Header>
    </motion.div>
    </>
  )
}

export default Projects