import React from 'react'
import { Header, Grid, Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  let canClick = false;
  const nav = useNavigate()
  return (
    <Grid padded centered style={{height: '100vh', display: 'flex'}}>
      <Grid.Row style={{height: '50%'}}>
          <Header className="invisible" as='h1' style={{fontSize: '4vw', alignSelf: 'flex-end'}} inverted >Hello, I am <span style={{color: '#54ffff'}}>Andrew Hawileh</span></Header>
      </Grid.Row>
      <Grid.Row style={{height: '50%'}}>
        <Header className="invisible two" as='h1' style={{fontSize: '3.5vw'}}  inverted>I am a Full Stack Software Engineer <br/><Button className="invisible three" icon='code' onAnimationEnd={() => canClick = true} size='huge' onClick={() => {
          if (canClick) nav('/wip')}} inverted color='teal' content="View My Work"/></Header>
      </Grid.Row>
    </Grid>
  )
}

export default Landing
