const express = require('express');
const Model = require('../models/registrationModel');

const router = express.Router();

router.post('/add', (req, res) => {

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


//: denotes URL paremeter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    Model.findOne({email : req.params.email})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {

    const data = req.body;
    const updateData = {};
    for(let key in data){
        if(data[key] !== ""){
            updateData[key] = data[key];
        }
    }

    Model.findByIdAndUpdate(req.params.id, updateData, { new : true })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
    
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;