import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import { Paper } from '@material-ui/core';

import './CatsAndSharks.styles.css';

const CatsAndSharks = ({catsAndSharks}) => {

    return (
        <Carousel>
            {
                catsAndSharks.map( (catAndShark) => (
                    <Paper>
                        <img className='slideShow-image' src={catAndShark} alt='catAndShark' key={catAndShark}/>
                    </Paper>
                    )
                )
            }
        </Carousel>
    )
};

export default CatsAndSharks;
