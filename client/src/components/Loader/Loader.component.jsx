import React from 'react';
import {Box, CircularProgress} from '@material-ui/core';

import './Loader.styles.css';

const Loader = () => {
    return (
        <Box className='loader'>
            <CircularProgress />
        </Box>
    )
}

export default Loader;