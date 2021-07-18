import React from 'react';
import Carousel from 'react-material-ui-carousel'; 
import SlideShow from '../SlideShow/SlideShow.component';

import './CatsAndSharks.styles.css';

const CatsAndSharks = ({catsAndSharks}) => {

    return (
        <Carousel>
            {
                catsAndSharks.map( (data, index) => (
                    <SlideShow key={index} data={data} cats='cats'/>
                ))
            }
        </Carousel>
    )
};

export default CatsAndSharks;
