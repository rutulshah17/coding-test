import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SlideShow from '../SlideShow/SlideShow.component';

import './Cats.styles.css';

const Cats = ({cats}) => {
    return (
        <Carousel>
            {
                cats.map( (data) => (
                    <SlideShow key={data} data={data} cats='cats'/>
                )
                )
            }
        </Carousel>
    )
};

export default Cats;
