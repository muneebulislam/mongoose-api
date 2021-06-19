const express = require('express');
const mongoose = require('mongoose');
// import the user.js file
const User = require('./model/user');

require('dotenv/config');
const app = express();
app.use(express.json());

const Port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`listening on port ${Port}`)
});

app.get('/users', (req,res) => {
    let users = ["sarah", "hasan", "tuba"];
    res.send({'current user': users})
});

app.post('/create_user', async (req, res) =>{
   try {
       const cur_user = new User(req.body);
       await cur_user.save();
    res.send(`User: ${cur_user} ${"\n"}has been created successfully!`)
       
   } catch (error) {
       res.send({ message: error})
   }
   
});

mongoose.connect(process.env.DB_CONNECTION_STRING,{ useUnifiedTopology: true, useNewUrlParser: true},
    (req, res) =>{
        console.log('connected to the database!')

    });

app.listen(Port, ()=> {
    console.log(`listening on port ${Port}`)
});

