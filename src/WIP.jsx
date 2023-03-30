import React, {useState} from 'react'
import {Header, Button, Popup, Modal} from 'semantic-ui-react'

const WIP = () => {
  const [open, setOpen] = useState(false);
  return (
    <div class='absCtr'>
      <div class='child'>
      <u style={{color: 'white'}}><Header style={{fontSize: '4.5vw'}} as='h1' inverted>Not so fast!</Header></u>
      <Header as='h1' inverted style={{fontSize: '1.5vw'}}>This site is still a <span style={{color: '#54ffff'}}>work in progress!</span></Header>
      <Header as='h2' inverted style={{fontSize: '1.4vw'}}>Enjoy some links in the meantime:</Header>
      <Popup content='Github' trigger={<Button size='huge' href='https://github.com/DirtyKeyboard' circular inverted icon='github'/>} />
      <Popup content='LinkedIn' trigger={<Button size='huge' href='https://www.linkedin.com/in/andrewhawileh/' circular inverted icon='linkedin'/>} />
      <Popup content='Blogs' trigger={<Button size='huge' href='https://medium.com/@andrewh829' circular inverted icon='medium'/>} />
      <Popup content='Contact Me' trigger={<Button size='huge' circular inverted icon='user' onClick={() => setOpen(true)}/>} />
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Contact Me</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h4>I look forward to hearing from you!</h4>
          <p>E-mail: <a href="mailto:andrewh829@gmail.com">andrewh829@gmail.com</a></p>
          <p>Phone Number: +1-(469)-744-1118</p>
          <p><em>Best way to reach me</em>: Call/Text</p>
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
    </div>
    </div>
  )
}

export default WIP 