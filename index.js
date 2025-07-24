require("dotenv").config();
const express = require("express");
const cors = require('cors');
const product = require("./Routes/products");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5001;

app.use("/", product);

const server = app.listen(PORT, () => {
  console.log("App is running on port ", PORT);
});
