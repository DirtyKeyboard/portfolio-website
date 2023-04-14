import React from 'react'
import NavBar from './NavBar'
import {Header, Image, Container, Divider, Label} from 'semantic-ui-react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opcaity: 0}}
    >
      
      <Header as='h1' style={{fontSize: '6vh'}} inverted>About Me</Header>
      <Image src="https://media.licdn.com/dms/image/D5603AQGJ5Pay0eE8Lw/profile-displayphoto-shrink_800_800/0/1679001906714?e=1686787200&v=beta&t=J9dRKGHpYEkiSyxkKDcPMYaNrahwuWLhAlKNp2cvs-Q"
      size="medium" circular/>
    <br />
    <Container text>
      <p className='about-txt'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
      </p>
      <Divider />
      </Container>
    <Header as='h1' style={{fontSize: '3vh', fontStyle: 'italic'}} inverted>Skills</Header>
    <Label.Group>
      <Label color="teal" inverted>JavaScript (ES6)</Label>
      <Label color="teal" inverted>React.JS</Label>
      <Label color="teal" inverted>Python</Label>
      <Label color="teal" inverted>Flask</Label>
      <Label color="teal" inverted>SQLAlchemy</Label>
    </Label.Group>
    </motion.div>
    </>
  )
}

export default About