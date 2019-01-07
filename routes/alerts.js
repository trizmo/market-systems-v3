var express = require("express");
var router = express.Router();

var alerts_controller = require("../controllers/alerts_controller");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", alerts_controller.index);
router.post("/new", isAuthenticated, alerts_controller.createAlert);


module.exports = router; 