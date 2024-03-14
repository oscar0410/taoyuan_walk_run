const express = require('express');
const path = require("path");
const router = express.Router();


// return a pdf file in ../public/files/pdf
router.get('/', async (req, res) => {
    const filePath = path.join(__dirname, '../public/files/pdf/', 'info.pdf');
    res.sendFile(filePath);
});

module.exports = router;
