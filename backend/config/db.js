"use strict";
const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: process.env.SUN_DB_HOST,
  user: process.env.SUN_DB_USER,
  password: process.env.SUN_DB_MDP,
  database: process.env.SUN_DB_NAME,
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log(
    `Connexion à la base de données '${process.env.SUN_DB_NAME}' réussie.`
  );
});

module.exports = dbConn;
