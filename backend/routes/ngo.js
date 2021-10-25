const { Router } = require("express");
const express = require("express");
const ngoController = require("../controllers/ngo");

const route = express.Router();

route.post("/register", ngoController.register);
route.post("/login", ngoController.loginNgo);
route.post("/done", ngoController.done);
module.exports = route;
