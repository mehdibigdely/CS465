var express = require("express");
var router = express.Router();

/* GET news page. */
const controller = require("../controllers/rooms");

router.get("/", controller.rooms);

module.exports = router;