var express = require("express");
var router = express.Router();

/* GET travel page. */
const controller = require("../controllers/meals");

router.get("/", controller.meals);

module.exports = router;