import React from 'react';
import { Paper } from '@material-ui/core';

const SlideShow = (props) => {
    return (
        <Paper>
            <img className='slideShow-image' src={props.data} alt='' />
        </Paper>
    )
};

export default SlideShow;