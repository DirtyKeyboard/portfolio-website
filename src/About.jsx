import React from 'react'
import NavBar from './NavBar'
import {Header, Divider} from 'semantic-ui-react'
import {motion} from 'framer-motion'

const About = () => {
  const label = {
    fontWeight: 'bold', fontFamily: 'Quicksand, sans-serif', color: '#54ffff', margin: '8px', padding: '8px', paddingLeft: '12px', paddingRight: '12px', outline: '1px solid', borderRadius: '5px'
  }
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opcaity: 0}}
    >
      <Divider inverted horizontal style={{paddingLeft: '6vw', paddingRight: '6vw'}}>
        <h1 className='header' style={{fontSize: '10vh'}}>ABOUT ME</h1>
      </Divider>
    

      <Divider />
      <p className='about-txt'>
      Hello, My name is <span style={{color: '#54ffff', textDecoration: 'underline'}}>Andrew Hawileh</span>, I am a Full Stack Software Developer based in Plano, Tx. 
      I have always been an analytically minded person, and I was drawn to coding when I was about 10 years
      old and I discovered the BATCH programming language, which sparked my interest in coding, 
      and began my discovery of how computers work, and it was then I began
      to uncover how applications are built. 
      
      </p>
      <br />
      <p className='about-txt'>
      I took my first “structured” programming class 
      in Plano Senior High School, studying Java for 2 years, continuing my studies for programming
      in college as well, where I ultimately got my Associates in Sciences with a Computer Science Focus.
      Following my college graduation, I enrolled in a 15-week fast paced programming bootcamp known as 'Flatiron',
      which is where I developed my full stack development skills! I look forward to 
      finding a company with values parallel to mine that I can grow with, I am also eager to
      build upon my knowledge and I will always have a want to excel in whatever path I take.
      </p>
      <br />
      <img src="https://media.licdn.com/dms/image/D5603AQEuh47kLjFexA/profile-displayphoto-shrink_200_200/0/1683154699639?e=1688601600&v=beta&t=GT1PZgzvMpUdw8Qu2JTF17wORyNMxoJZE9dq1w_Oun4"
      style={{borderRadius: '50%', width: '10vw'}}
      alt="self portrait"/>
      <Divider />
    <Header as='h1' style={{fontSize: '3vh', fontStyle: 'italic', fontWeight: 'lighter'}} inverted={true}>Skills</Header>
    <div style={{display: 'flex', width: '50%', justifyContent:'center', flexWrap: 'wrap'}}>
      <span style={label}>JavaScript (ES6)</span>
      <span style={label}>React</span>
      <span style={label}>Python</span>
      <span style={label}>Flask</span>
      <span style={label}>SQL Alchemy</span>
      <span style={label}>Express</span>
      <span style={label}>Prisma</span>
    </div>
    </motion.div>
    </>
  )
}

export default About