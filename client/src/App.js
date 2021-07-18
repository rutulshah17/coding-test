import React from 'react';

import { Container } from '@material-ui/core';

import { fetchCats, fetchSharks, fetchCatsAndSharks } from './api/app.api';

import Cats from './components/Cats/Cats.components';
import Sharks from './components/Sharks/Sharks.components';
import CatsAndSharks from './components/CatsAndSharks/CatsAndSharks.components';
import Loader from './components/Loader/Loader.component';
import Buttons from './components/Buttons/Buttons.component';

import './App.css';

class App extends React.Component {

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
                    <Buttons 
                        catsButton={catsButton} 
                        sharksButton={sharksButton} 
                        clickCat={this.handleCats} 
                        clickShark={this.handleSharks} 
                    />
                    
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

export default App;