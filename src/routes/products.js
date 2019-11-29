const express = require("express");
const jwt = require("express-jwt");
const Product = require("../models/products");
const productsRoute = express.Router();
const secret = { secret: process.env.SECRET || "example1234" };

productsRoute.get("/", jwt(secret), (req, res) => {
  //Get all products
  Product.find({}, (err, docs) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(docs);
  });
});

productsRoute.post("/", jwt(secret), (req, res) => {
  //Post new product
  const newProduct = new Product(req.body);
  newProduct.save((err, doc) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(doc);
  });
});

productsRoute.delete("/", jwt(secret), (req, res) => {
  // Delete product
  Product.findOneAndDelete({ code: req.body.code }, (err, doc) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(doc);
  });
});

module.exports = productsRoute;
