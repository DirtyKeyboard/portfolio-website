import React from 'react'
import NavBar from './NavBar'
import {Header} from 'semantic-ui-react'

const Blogs = () => {
  return (
    <div>
      <NavBar />
      <Header as='h1' inverted>Blogs</Header>
    </div>
  )
}

export default Blogs