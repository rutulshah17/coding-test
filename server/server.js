import express from 'express';
import apiRoutes from './routes/api.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


app.use( '/api', apiRoutes );

const PORT = 5000;
app.listen( PORT, () => console.log( `Server is running on port ${PORT}` ) );

app.get('/', (req,res) => {
    res.status(200).json({"success": 'Welcome to Ownr Developer Candidate Coding Test'});
});

export default app;