import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Icon} from 'semantic-ui-react'

//Project Card will have Name, Preview, Langs. On click it will expand and show Detailed Desc, and link to a video showcase
const ProjectCard = ({image="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png", title="No Title", preview="No Desc", link="https://andrewhawileh.com/404", langs=[], site="", video="", setVideo}) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#0A192C'
            }
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="get/post"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <em>Description...</em> <br />
                        {preview}
                    </Typography>
                    {langs.map(el => (<Icon name={el} size="large"/>))}
                </CardContent>
                <CardActions>
                    <Button size="small" href={link}>See Repo</Button>
                    {site ? <Button size="small" href={site}>See Website</Button> : 
                        video ? <Button size="small" onClick={() => setVideo(video)}>See Video</Button> : <Button size="small" disabled>See Website</Button>}
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default ProjectCard