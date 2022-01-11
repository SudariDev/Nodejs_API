const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const Usermodel = require('../Backend/src/models/Usermodel')
const cors = require('cors')
app.use(cors)


//POST : /create
app.post('/createUser', (req, res) => {
    Usermodel.create(req.body).then((user) => {
        res.send(user)
    }).catch((err) => {
        console.log(err);
        res.send("error")
    })
})

//find a user
app.get('/: id ', (req, res) => {
    console.log(req)
    Usermodel.findOne({ _id: req.params.id }).then((user) => {
        res.send(user)
    }).catch((err) => {
        console.log(err);
        res.send("error")
    })
})

//get all users
app.get('/getUsers', (req, res) => {
    Usermodel.find().then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err)
        res.send("err")
    })


})

//delete
app.delete('/:id', (req, res) => {
    Usermodel.deleteOne({ _id: req.params.id }).then((user) => {
        console.log(user)
        res.send("delete", user._id);

    }).catch((err) => {
        console.log("err")
    })

})

//update
app.put('/:id', (req, res) => {
    Usermodel.updateOne({ _id: req.params.id }, { $set: { email: req.body.email, password: req.body.password } })
        .then((updated) => {
            res.send(updated)

        }).catch((err) => {
            console.log("error")
        })


})







//database connection
mongoose.connect('mongodb://localhost:27017', () => {
    console.log("Database connected")
});



//---------------------------Server--------------------//
app.listen('4000', () => {
    console.log("Server running on port 4000")
})