const express = require("express");

const productsRoute = express.Router();

productsRoute.get("/", (req, res) => {
  //Get all products
  res.send({ ok: "ok" });
});

productsRoute.post("/", () => {
  //Post new product
});

productsRoute.delete("/", () => {
  //Delete product
});

module.exports = productsRoute;
