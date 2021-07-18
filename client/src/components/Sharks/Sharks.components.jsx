import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import SlideShow from '../SlideShow/SlideShow.component';

import './Sharks.styles.css';

const Sharks = ({sharks}) => {

    return (
        <Carousel>
            {
                sharks.map( (data, index) => (
                    <SlideShow key={index} data={data} cats='cats'/>
                ))
            }
        </Carousel>
    )
};

export default Sharks;
