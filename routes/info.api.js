const express = require('express');
const path = require("path");
const router = express.Router();


// return an image file in ../public/files/info
router.get('/', async (req, res) => {
    const filePath = path.join(__dirname, '../public/files/info/', '玩法攻略.pdf');
    res.sendFile(filePath);
});

module.exports = router;
