// const express = require("express");
// const conferenceModel = require("../models/conferenceModel");

// const router = express.Router();

// router.post("/add", (req, res) => {
//   console.log(res.body); //log the res body

//   new conferenceModel(req.body)
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get("/getall", (req, res) => {
//   conferenceModel
//     .find({})
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get("/getbyid/:id", (req, res) => {
//   conferenceModel
//     .findById(req.params.id)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put("/update/:id", (req, res) => {
//   conferenceModel
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete("/delete/:id", (req, res) => {
//   conferenceModel
//     .findByIdAndDelete(req.params.id)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post("/authenticate", (req, res) => {
//   conferenceModel
//     .findOne(req.body)
//     .then((result) => {
//       if (result !== null) res.json(result);
//       else res.status(401).json({ message: "login failed" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Conference = require('../models/Conference');

// Get all conferences
router.get('/', async (req, res) => {
    try {
        const conferences = await Conference.find();
        res.json(conferences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new conference
router.post('/', async (req, res) => {
    const conference = new Conference(req.body);
    try {
        const newConference = await conference.save();
        res.status(201).json(newConference);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a conference
router.put('/:id', async (req, res) => {
    try {
        const conference = await Conference.findById(req.params.id);
        if (!conference) return res.status(404).json({ message: 'Conference not found' });

        Object.assign(conference, req.body);
        await conference.save();
        res.json(conference);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a conference
router.delete('/:id', async (req, res) => {
    try {
        const conference = await Conference.findById(req.params.id);
        if (!conference) return res.status(404).json({ message: 'Conference not found' });

        await conference.remove();
        res.json({ message: 'Conference deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
