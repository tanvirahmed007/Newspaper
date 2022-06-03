import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Col } from 'react-bootstrap';



const PropNews = (props) => {
    const { title, description, urlToImage } = props.news;
  return (
    <Card className='my-5' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  )
}

export default PropNews