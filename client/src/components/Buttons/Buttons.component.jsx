import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';

const Buttons = (props) => {
    const { catsButton, sharksButton, clickCat, clickShark } = props;
    return (
        <Box>
            <ToggleButtonGroup className='app-toggle-button' >
                <ToggleButton selected={catsButton} onClick={clickCat} value='Cats'> 
                    <Typography color='primary' variant='h5'> Cats </Typography> 
                </ToggleButton>
                
                <ToggleButton selected={sharksButton} onClick={clickShark} value='Sharks'> 
                    <Typography color='primary' variant='h5'> Sharks </Typography> 
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}

export default Buttons