const express = require('express');
const server = express();
server.use(express.json());
const carsRoute = require('./router/cars-route');


server.get('/', (req, res)=>{
    res.json({
        message: 'Welcome!'
    })
})

server.use('/cars', carsRoute);


const PORT = 4000;

server.listen(PORT, () => {
    console.log(
        `
     --------------------------------------------------------------
     |       ___                                                   |
     |      (^o^) <Server is running on http://localhost:${PORT}      |
     |     ((___))                                                 |
     |       ^ ^                                                   |
     --------------------------------------------------------------
            `
    );
})