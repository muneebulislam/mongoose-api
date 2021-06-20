const express = require('express');
const router = express.Router();
const User = require('../models/user');
// Get all users

router.get('/test_users', (req,res) => {
    let users = ["sarah", "hasan", "tuba"];
    res.send({'current user': users})
});

router.post('/create_user', async (req, res) =>{
    const cur_user = new User({name:req.body.name, age: req.body.age});
   try {
       await cur_user.save();
       res.json(cur_user)
       
   } catch (error) {
       res.send({ error_message: error})
   }
   
});


// get all  users
router.get('/getUsers', async (req, res) => {
    try {
        const users = await Post.find();
        res.send(users);
    } catch (error) {
        res.send({ message: error})
    }
});

// Get a single user using id
router.get('/getOneUser/:userId', async (req, res) => {
    try {
        const user = await Post.findById(req.params.userId);
        res.send(user)
    } catch (error) {
        res.send({ Erro_message: error})
    }
});

router.get('/specific', (req, res) => {
    res.send("specific post");
});

module.exports = router;