const express = require('express');
const basicAuth = require("../middleware/basicAuth");
const router = express.Router();

/* GET home page. */
router.get('/', basicAuth,(req, res) => {
    res.render('admin');
});

module.exports = router;
