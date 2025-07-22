const express = require("express");
const productCategories = express.Router();
const mysql = require("mysql2");
const rootPassword = process.env.DB_ROOT_PASSWORD;
const database = process.env.DB_DATABASE;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: rootPassword,
  database: database,
  port: 3306,
  multipleStatements: true,
});

productCategories.get("/", (req, res) => {
  let categoriesData;

  pool.query("select * from categories", (err, categories) => {
    if (err) {
      res.status(500).send(err);
    } else {
      categoriesData = categories;
      res.status(200).send(categoriesData);
    }
  });
});

module.exports = productCategories;
