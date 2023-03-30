import React from 'react'
import {Header, Button, Icon} from 'semantic-ui-react'

const WIP = () => {
  return (
    <div class="absCtr">
      <u style={{color: 'white'}}><Header style={{fontSize: '90px'}} as='h1' inverted>Not so fast!</Header></u>
      <Header as='h1' inverted>This site is still a <span style={{color: '#54ffff'}}>work in progress!</span></Header>
      <Header as='h2' inverted>Enjoy some links in the meantime:</Header>
      <Button size='huge' href='https://github.com/DirtyKeyboard' circular inverted icon='github'/>
      <Button size='huge' circular inverted icon='linkedin'/>
      <Button size='huge' circular inverted icon='medium'/>
      <Button size='huge' circular inverted icon='user'/>
    </div>
  )
}

export default WIP