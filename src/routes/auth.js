const express = require("express");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const auth = express.Router();

auth.post("/", (req, res) => {
  //Get all products
  User.find(req.body, (err, docs) => {
    if (err) return res.status(500).send(err);
    const token = jwt.sign({ test: "test" }, "example1234");
    res.status(200).send({ docs, token });
  });
});

module.exports = auth;