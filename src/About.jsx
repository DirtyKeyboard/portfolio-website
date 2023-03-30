import React from 'react'
import NavBar from './NavBar'
import {Header} from 'semantic-ui-react'

const About = () => {
  return (
    <div>
      <NavBar />
      <Header as='h1' inverted>About Me</Header>
    </div>
  )
}

export default About