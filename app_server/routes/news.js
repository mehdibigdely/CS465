var express = require("express");
var router = express.Router();

/* GET news page. */
const controller = require("../controllers/news");

router.get("/", controller.news);

module.exports = router;