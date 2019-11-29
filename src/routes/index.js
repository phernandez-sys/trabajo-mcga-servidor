const express = require("express");
const products = require("./products");
const auth = require("./auth");

const router = express.Router();

router.use("/product", products);
router.use("/auth", auth);
module.exports = router;
