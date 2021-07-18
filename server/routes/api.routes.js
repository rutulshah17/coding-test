import express from 'express';
const router = express.Router();

import {catsList, sharksList} from '../data/api.data.js';

router.get('/cats', (req,res) => {
    console.log(catsList);
    res.send(`${catsList}`);
});

router.get('/sharks', (req,res) => {
    console.log(sharksList);
    res.send(`${sharksList}`);
});

router.get('/both', (req,res) => {
    let randomizedArray = [...catsList, ...sharksList];
    randomizedArray = randomizedArray.sort(() => Math.random() - 0.5)
    res.send(`${randomizedArray}`);
});


export default router;