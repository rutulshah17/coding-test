import express from 'express';
import apiRoutes from './routes/api.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen( PORT, () => console.log( `Server is running on port ${PORT}` ) );

app.get('/', (req,res) => {
    res.send('Welcome to Ownr Developer Candidate Coding Test')
});

app.use( '/api', apiRoutes );