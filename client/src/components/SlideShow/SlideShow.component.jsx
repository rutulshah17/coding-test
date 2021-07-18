import React from 'react';
import { Paper } from '@material-ui/core';

const SlideShow = ({data}) => {
    return (
        <Paper>
            <img className='slideShow-image' src={data} alt='' />
        </Paper>
    )
};

export default SlideShow;