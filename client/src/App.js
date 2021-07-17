import React from 'react';

import { fetchCats, fetchSharks, fetchBoth } from '../src/api/app.api';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            cats:[],
            sharks:[],
            both:[]
        }
    }

    componentDidMount = async() => {
        const cats = await fetchCats();
        const sharks = await fetchSharks();
        const both = await fetchBoth();
    }
    render() {
        return (
            <div>
                <h2> App </h2>
            </div>
        )
    }
}

export default App;