import React from 'react'
import NavBar from './NavBar'
import {Header} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import ImgMediaCard from './ImgMediaCard'

const Blogs = () => {
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      <Header as='h1' style={{fontSize: '6vh'}} inverted>Blogs</Header>
      <Header as='h2' style={{fontSize: '3vh'}} inverted>Here is a list of all of my medium blogs!</Header>
      <ImgMediaCard title="Sending GET & POST requests with Fetch API in JavaScript"
                    preview="Fetch, like many other tools we've been gifted, 
                    is a very powerful and unique tool that allows us to begin our journey into asynchronous programming."
                    link="https://medium.com/@andrewh829/sending-get-post-requests-with-fetch-api-in-javascript-130f75cd1724"
                    image="https://cdn-media-1.freecodecamp.org/images/1*gqHgCNubMncv7EwWNdArGQ.png"/>
      
    </motion.div>
    </>
  )
}

export default Blogs