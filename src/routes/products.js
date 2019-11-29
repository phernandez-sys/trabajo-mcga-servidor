const express = require("express");
const jwt = require("express-jwt");
const productsRoute = express.Router();
const secret = { secret: process.env.SECRET || "example1234" };

productsRoute.get("/", jwt(secret), (req, res) => {
  //Get all products
  res.send({ ok: "ok" });
});

productsRoute.post("/", jwt(secret), () => {
  //Post new product
});

productsRoute.delete("/", jwt(secret), () => {
  //Delete product
});

module.exports = productsRoute;
