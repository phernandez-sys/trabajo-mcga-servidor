const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("../src/routes");
const app = express();

const url =
  "mongodb+srv://cangeler:CA-555-97@cluster0-6zzbb.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB CONNECTED"))
  .catch(e => console.log("ERROR", e));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo en puerto 4000");
});
