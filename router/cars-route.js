const express = require('express');
const router = express.Router();
const db = require('../data/cars-model');

router.get('/', async (req, res)=>{
    const cars = await db.getCars();
    res.json(cars)
})

router.post('/', async (req, res)=>{
    const newCar = await db.addCar(req.body);
    res.json(newCar)
})


module.exports = router;