const express = require("express");
const products = require("./products");
const router = express.Router();

router.use("/product", products);

module.exports = router;
