import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import { Paper } from '@material-ui/core';

import './Cats.styles.css';

const Cats = ({cats}) => {
    return (
        <Carousel>
            {
                cats.map( (cat) => (
                    <Paper key={cat}>
                        <img className='slideShow-image' src={cat} alt='cats'/>
                    </Paper>
                    )
                )
            }
        </Carousel>
    )
};

export default Cats;
