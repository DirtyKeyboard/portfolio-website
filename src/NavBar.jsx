import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const NavBar = () => {
  return (
      <Menu secondary pointing inverted fluid widths={6}>
          <Menu.Item as={NavLink} style={{padding: '15px'}} exact="true"  to="/about" activeclassname="active">About</Menu.Item>
          <Menu.Item as={NavLink} style={{padding: '15px'}} exact="true"  to="/projects" activeclassname="active">My Projects</Menu.Item>
          <Menu.Item as={NavLink} style={{padding: '15px'}}exact="true"  to="/blogs" activeclassname="active">Blogs</Menu.Item>
          <Menu.Item as={NavLink} style={{padding: '15px'}}exact="true"  to="/contact" activeclassname="active">Contact</Menu.Item>
      </Menu>
  )
}

export default NavBar