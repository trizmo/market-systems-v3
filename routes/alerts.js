var express = require("express");
var router = express.Router();

var alerts_controller = require("../controllers/alerts_controller");

router.get("/", alerts_controller.index);

module.exports = router; 