const express = require("express");
const adminModel = require("../models/adminModel");

const router = express.Router();

router.post("/add", (req, res) => {
  console.log(res.body); //log the res body

  new adminModel(req.body)
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  adminModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  adminModel
    .findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  adminModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  adminModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/authenticate", (req, res) => {
  adminModel
    .findOne(req.body)
    .then((result) => {
      if (result !== null) res.json(result);
      else res.status(401).json({ message: "login failed" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;