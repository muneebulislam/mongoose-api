const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
app.use(express.json());
// import user routers
const userRoute = require('./routes/users');

// import the user.js file
// middleware that allows to use the routes using
// localhost:3000/posts/....
app.use('/users', userRoute);
const Port = process.env.PORT;



mongoose.connect(process.env.DB_CONNECTION_STRING,{ useUnifiedTopology: true, useNewUrlParser: true},
    (req, res) => {
        console.log('connected to the database!');

    });

app.listen(Port, () => {
    console.log(`listening on port ${Port}`)
});

