import React from 'react'
import NavBar from './NavBar'
import {Divider} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';
import bosslogo from './assets/logo.png'
import ftrlogo from './assets/chefhatIcon.png'

const Projects = () => {
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      <Divider inverted horizontal style={{paddingLeft: '6vw', paddingRight: '6vw'}}>
        <h1 className='header' style={{fontSize: '10vh'}}>PROJECTS</h1>
      </Divider>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item>
            <ProjectCard
            image={bosslogo}
            title="Best One Stop Shop"
            preview="This application allowed the purchase and publishing of car listings, using a local rest API to keep changes persistent"
            link="https://github.com/DirtyKeyboard/phase-1-project"
            langs={["js", "html5", "css3"]}/> {/* image, title, preview, link */}
          </Grid>
          <Grid item>
          <ProjectCard
            image={ftrlogo}
            title="Find That Recipe"
            preview="Uses a public API along with a local hosted rest API to search through food recipes and save them to your favorites"
            link="https://github.com/DirtyKeyboard/phase-2-project"
            langs={["react", "js", "html5", "css3"]}/> {/* image, title, preview, link */}
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