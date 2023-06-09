import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Menu, Icon, Modal, Button} from 'semantic-ui-react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const style = {padding: '.8vw', marginLeft: '1vw', marginRight: '1vw'}
  return (
      <Menu secondary pointing inverted>
          <Menu.Item as={NavLink} style={style} exact="true"  to="/about" activeclassname="active">About</Menu.Item>
          <Menu.Item as={NavLink} style={style} exact="true"  to="/projects" activeclassname="active">My Projects</Menu.Item>
          <Menu.Item as={NavLink} style={style} exact="true"  to="/blogs" activeclassname="active">Blogs</Menu.Item>
          <Menu.Item as={NavLink} style={style} exact="true"  to="/contact" activeclassname="active">Contact</Menu.Item>

          <Menu.Item position='right'><a href="https://medium.com/@andrewh829"><Icon name='medium' size='big'/></a></Menu.Item>
          <Menu.Item><a href="https://www.linkedin.com/in/andrewhawileh/"><Icon name='linkedin' size='big'/></a></Menu.Item>
          <Menu.Item><a href="https://github.com/DirtyKeyboard"><Icon name='github' size='big'/></a></Menu.Item>
          <Menu.Item><Icon link name='user' size='big' onClick={() => setOpen(true)}/></Menu.Item>
          <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}>
          <Modal.Header>Contact Me</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <h4 style={{color: 'black'}}>I look forward to hearing from you!</h4>
              <p style={{color: 'black'}}>E-mail: <a href="mailto:andrewh829@gmail.com">andrewh829@gmail.com</a></p>
              <p style={{color: 'black'}}>Phone Number: +1-(469)-744-1118</p>
              <p style={{color: 'black'}}>My Resume: <a href="https://docs.google.com/document/d/1BiLQtS1wJo8pAFmy2yO8jMfBZVyB_dYj2NzWra7mN4M/edit?usp=sharing">Google Drive</a></p>
              <p style={{color: 'black'}}><em>Best way to reach me</em> : Call/Text</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Ok"
              labelPosition='right'
              icon='checkmark'
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </Menu>
  )
}

export default NavBar