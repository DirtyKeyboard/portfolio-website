import React from 'react'
import {Header, Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const RouteNotFound = () => {
    const navigate = useNavigate()
    const styleObj = {
        display: 'grid',
        placeItems: 'center',
        alignContent: 'center'
    }
    return (
    <div style={styleObj}>
        <Header as='h1' style={{fontSize: '7vh', marginTop: '40vh'}} inverted>404! Page Not Found!</Header>
        <Button color='teal' icon='home' size='huge' inverted onClick={() => navigate('/')} content="Back To Homepage"/>
    </div>
    )
}

export default RouteNotFound