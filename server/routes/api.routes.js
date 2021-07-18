import express from 'express';
const router = express.Router();

import { catsList, sharksList } from '../data/api.data.js';

import { randomizeArray } from '../utils/api.utils.js';

router.get('/cats', (req,res) => {
    console.log(catsList);
    res.status(200).send(catsList);
});

router.get('/sharks', (req,res) => {
    console.log(sharksList);
    res.status(200).send(sharksList);
});

router.get('/both', (req,res) => {
    const randomlySortedArray = randomizeArray([...catsList, ...sharksList]);
    res.status(200).send(randomlySortedArray);
});


export default router;