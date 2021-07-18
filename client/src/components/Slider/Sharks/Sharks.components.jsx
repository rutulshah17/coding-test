import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import { Paper } from '@material-ui/core';

import './Sharks.styles.css';

const Sharks = ({sharks}) => {

    return (
        <Carousel>
            {
                sharks.map( (shark) => (
                    <Paper>
                        <img className='slideShow-image' src={shark} alt='sharks' key={sharks}/>
                    </Paper>
                    )
                )
            }
        </Carousel>
    )
};

export default Sharks;
