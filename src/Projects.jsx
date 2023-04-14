import React from 'react'
import NavBar from './NavBar'
import {Header} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import ImgMediaCard from './ImgMediaCard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item>
            {/* CARD IN HERE */}
          </Grid>
          <Grid item>
            {/* CARD IN HERE */}
          </Grid>
          <Grid item>
            {/* CARD IN HERE */}
          </Grid>
        </Grid>
      </Box>
    </motion.div>
    </>
  )
}

export default Projects