require("dotenv").config();
const express = require("express");
const cors = require('cors');
const productCategories = require("./Routes/productCategories");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5001;

app.use("/productCategories", productCategories);

const server = app.listen(PORT, () => {
  console.log("App is running on port ", PORT);
});
