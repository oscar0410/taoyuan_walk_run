const express = require('express');
const path = require("path");
const router = express.Router();


// return an image file in ../public/files/images
router.get('/', async (req, res) => {
    const filePath = path.join(__dirname, '../public/files/images/', 'info.png');
    res.sendFile(filePath);
});

module.exports = router;
