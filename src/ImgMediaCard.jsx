import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A192C'
    }
  },
});

export default function ImgMediaCard({title, preview, link, image}) {
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
          <em>Preview...</em> <p />
          {preview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>View This Blog</Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
