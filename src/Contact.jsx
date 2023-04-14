import React, {useState} from 'react'
import NavBar from './NavBar'
import {Header, Form, Button, TextArea, Message} from 'semantic-ui-react'
import {motion} from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({name: "", email: "", msg: ""})
  const pStyle = {
    color: 'white',
    fontFamily: 'lato',
    fontWeight: 'bold'
  }
  
  const divStyle = {
    display: 'grid',
    placeItems: 'center',
    alignContent: 'center',
    marginTop: '20px',
    marginBottom: '40px'
  }

  const formBox = {
    marginLeft: '25vw',
    marginRight: '25vw'
  }
  function handleSubmit(e) {
    const data = {...formData}
    e.target.reset()
    setFormData({name: "", email: "", msg: ""})
    console.log(formData)
  }

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <>
    <NavBar />
    <motion.div
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      <div style={divStyle}>
        <Header as='h1' style={{fontSize: '6vh'}} inverted>Send Me and Email!</Header>
        <Header as='h2' style={{fontSize: '3vh', fontStyle:'italic'}} inverted>I will get back to you as soon as I can!</Header>
      </div>
      <Form style={formBox} onSubmit={handleSubmit}>
        <p style={pStyle}>Your Name</p>
        <Form.Input onChange={handleChange} name='name' text='true' />
        <p style={pStyle}>Your Email</p>
        <Form.Input onChange={handleChange} name='email' text='true' />
        <p style={pStyle}>Message</p>
        <TextArea onChange={handleChange} name='msg' style={{ minHeight: '30vh', marginBottom:'20px' }}/>
        <Button fluid type='submit' inverted>Submit</Button>
      </Form>
      {/* <Message style={formBox}
      success or error
      header='Form Completed'
      content="You're all signed up for the newsletter"
    /> */}
    </motion.div>
    </>
  )
}

export default Contact