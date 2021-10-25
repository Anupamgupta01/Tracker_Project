const { Router } = require("express");
const express = require("express");
const publicController = require("../controllers/public");

const route = express.Router();

//route.post("/login", publicController.login);
route.post("/upload", publicController.uploadContract);
module.exports = route;
