const db = require('./config');


const addCar = (car) =>{
    return db('cars').insert(car)
}

const getCars = ()=>{
    return db.select('*').from('cars');
}

module.exports = {
    addCar,
    getCars
}