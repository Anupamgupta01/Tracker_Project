const { Router } = require("express");
const express = require("express");
const factoryController = require("../controllers/factory");

const route = express.Router();

route.post("/register", factoryController.register);
route.post("/login", factoryController.loginFactory);
route.post("/getFactory", factoryController.getFactory);
route.post("/count", factoryController.getFactoryCount);
module.exports = route;
