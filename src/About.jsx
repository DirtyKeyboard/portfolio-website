import React from 'react'
import NavBar from './NavBar'
import {Header, Image, Divider, Label} from 'semantic-ui-react'
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
      
      <Header as='h1' style={{fontSize: '6vh'}} inverted={true}>About Me</Header>
      <Image src="https://media.licdn.com/dms/image/D5603AQGJ5Pay0eE8Lw/profile-displayphoto-shrink_800_800/0/1679001906714?e=1686787200&v=beta&t=J9dRKGHpYEkiSyxkKDcPMYaNrahwuWLhAlKNp2cvs-Q"
      size="medium" circular/>
    <br />
      <p className='about-txt'>
      Hello, My name is Andrew Hawileh, I am a Full Stack Software Developer based in Plano, Tx. 
      I have always been an analytically minded person, and I was drawn to coding when I was about 10 years
      old and I discovered the BATCH programming language, which sparked my interest in coding, 
      and began my discovery of how computers work, and it was then I began
      to uncover how applications are built. I took my first “structured” programming class 
      in High School, studying Java for 2 years, continuing my studies for programming
      in college as well, where I ultimately got my Associates in Sciences with a Computer Science Focus.
      Following my college graduation, I enrolled in a 15-week fast paced programming bootcamp known as 'Flatiron',
      which is where I developed my full stack development skills! I look forward to 
      finding a company with values parallel to mine that I can grow with, I am also eager to
      build upon my knowledge and I will always have a want to excel in whatever path I take.
      </p>
      <Divider />
    <Header as='h1' style={{fontSize: '3vh', fontStyle: 'italic'}} inverted={true}>Skills</Header>
    <Label.Group>
      <Label color="teal" inverted='true'>JavaScript (ES6)</Label>
      <Label color="teal" inverted='true'>React.JS</Label>
      <Label color="teal" inverted='true'>Python</Label>
      <Label color="teal" inverted='true'>Flask</Label>
      <Label color="teal" inverted='true'>SQLAlchemy</Label>
    </Label.Group>
    </motion.div>
    </>
  )
}

export default About