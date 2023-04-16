import React, {useState} from 'react'
import NavBar from './NavBar'
import {Header, Form, Button, TextArea, Message} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""})
  const [sent, setSent] = useState('')
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
  async function handleSubmit(e) {
    const data = {...formData}
    if (data.name.length > 0 && data.email.length > 0 && data.message.length > 0) {
      await sendEmail()
      e.target.reset()
      setFormData({name: "", email: "", message: ""})
    }
    else
    {
      showErrorMessage()
    }
  }

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function showSuccessMessage() {
    setSent('success')
    setTimeout(() => setSent(''), 4000)
  }

  function showErrorMessage() {
    setSent('error')
    setTimeout(() => setSent(''), 4000)
  }

  const sendEmail = () => {
    emailjs.send('service_7yv24ri', 'template_ka5cr6y', formData, 'WmFIqIrlZBJvUZjhq')
      .then((result) => {
          console.log(result.text); //result.text == OK when done.
          if (result.text === 'OK') {
            showSuccessMessage()
          }
      }, (error) => {
          console.log(error.text); 
      });
  };


  return (
    <>
    <NavBar />
    <motion.div
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      <div style={divStyle}>
      <h1 className='header' style={{fontSize: '10vh'}}>CONTACT ME</h1>
        <Header as='h2' style={{fontSize: '3vh', fontStyle:'italic', fontWeight: 'lighter'}} inverted>I will get back to you as soon as I can!</Header>
      </div>
      <Form style={formBox} onSubmit={handleSubmit}>
        <p style={pStyle}>Your Name</p>
        <Form.Input fluid onChange={handleChange} name='name' text='true' />
        <p style={pStyle}>Your Email</p>
        <Form.Input fluid onChange={handleChange} name='email' text='true' />
        <p style={pStyle}>Message</p>
        <TextArea onChange={handleChange} name='message' style={{ minHeight: '30vh', marginBottom:'20px' }}/>
        <Button fluid type='submit' inverted>Submit</Button>
      </Form>
      {sent === 'success' ? <Message style={formBox}
      success
      header='Success!'
      content="Your message has been sent! Thank you!"
    /> : null}
    {sent === 'error' ? <Message style={formBox}
      error
      header='Error!'
      content="There was a problem sending this message, please try again!"
    /> : null}
    </motion.div>
    </>
  )
}

export default Contact