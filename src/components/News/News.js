import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Row, Spinner } from 'react-bootstrap';
import PropNews from '../News_Props/PropNews';

import { Box, Grid} from '@mui/material';




const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-05-03&sortBy=publishedAt&apiKey=17ef2dcddf024b60a8478a62181720b8')
        .then(res => res.json())   // convert to json
        .then(data => setNews(data.articles))   // set the data to the state

    }, []);

  return (
    <div className="container">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                    {
                        news.map(news => <PropNews news={news} />)
                    }
                    
            </Grid>
        </Box>
    </div>
  )
}

export default News