const express = require('express');
require('dotenv/config');
const app = express();
// app.use(express.json());

const Port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`listening on port ${Port}`)
});

app.listen(Port, ()=> {
    console.log(`listening on port ${Port}`)
})