import React from 'react'
import NavBar from './NavBar'
import {Header} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';
import bosslogo from './assets/logo.png'

const Projects = () => {
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      <Header as='h1' style={{fontSize: '6vh'}} inverted={true}>Projects</Header>
      <Header as='h2' style={{fontSize: '3vh'}} inverted={true}>Here is a list of my projects!</Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item>
            <ProjectCard
            image={bosslogo}
            title="Best One Stop Shop!"
            preview="This application allowed the purchase and sale of car listings, using a local rest API to keep changes persistent"
            link="https://github.com/DirtyKeyboard/phase-1-project"
            langs={["js", "html5", "css3"]}/> {/* image, title, preview, link */}
          </Grid>
          <Grid item>
            {/* <ProjectCard/> */}
          </Grid>
          <Grid item>
            {/* <ProjectCard/> */}
          </Grid>
        </Grid>
      </Box>
    </motion.div>
    </>
  )
}

export default Projects