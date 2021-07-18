import React from 'react';

import { Container, Box, Typography } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import { fetchCats, fetchSharks, fetchCatsAndSharks } from '../../api/app.api';

import Cats from '../Cats/Cats.components';
import Sharks from '../Sharks/Sharks.components';
import CatsAndSharks from '../CatsAndSharks/CatsAndSharks.components';
import Loader from '../Loader/Loader.component';

import './Slider.styles.css'

class Slider extends React.Component {

    constructor() {
        super();

        this.state = {
            catsButton: false,
            sharksButton: false,
            cats:[],
            sharks:[],
            catsAndSharks:[]
        }
    }

    componentDidMount = async() => {
        const fetchedCats = await fetchCats();
        const fetchedSharks = await fetchSharks();
        const fetchedCatsAndSharks = await fetchCatsAndSharks();

        this.setState({ catsButton: !this.state.catsButton, cats: fetchedCats, sharks: fetchedSharks, catsAndSharks: fetchedCatsAndSharks });
    }

    handleCats = async() => {
        this.setState({ catsButton: !this.state.catsButton, cats: this.state.cats });
    }

    handleSharks = async() => {
        this.setState({ sharksButton: !this.state.sharksButton, sharks: this.state.sharks });
    }

    render() {
    
        const { catsButton, cats, sharksButton, sharks, catsAndSharks } = this.state;

        return (

                <Container disableGutters={true}>
                    <Box>
                        <ToggleButtonGroup className='slider-toggle-button' >
                            <ToggleButton selected={this.state.catsButton} onClick={this.handleCats} value='Cats'> 
                                <Typography color='primary' variant='h5'> Cats </Typography> 
                            </ToggleButton>
                            
                            <ToggleButton selected={this.state.sharksButton} onClick={this.handleSharks} value='Sharks'> 
                                <Typography color='primary' variant='h5'> Sharks </Typography> 
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    
                    {
                        //show loader if waiting on data from API
                        (!cats || !sharks) 
                        ? <Loader />
                        : 
                        //show Cats And Sharks - both, if catsButton and sharksButton value matches
                            (catsButton === sharksButton)
                            ? <CatsAndSharks catsAndSharks={catsAndSharks}/>
                            : ( (catsButton)
                                ? <Cats cats={cats} />
                                : <Sharks sharks={sharks} />
                                )
                    }
                
                </Container>
        )
    }
};

export default Slider;