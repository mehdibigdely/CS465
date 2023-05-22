var express = require("express");
var router = express.Router();

/* GET contact page. */
const controller = require("../controllers/contact");

router.get("/", controller.contact);

module.exports = router;