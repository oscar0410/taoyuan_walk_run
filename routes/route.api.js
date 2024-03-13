const express = require('express');
const path = require("path");
const router = express.Router();
const uploadConfig = require('../config/upload.config');
const fileService = require('../services/tycgRoute.service');
const basicAuth = require('../middleware/basicAuth');

router.get('/getAll', async (req, res) => {
    try {
        const files = await fileService.findAll();
        for (let i = 0; i < files.length; i++) {
            const filePath = path.join(__dirname, '../public/files/', files[i].id + '.gpx');
            const fileContent = await fileService.getFileContent(filePath);
            files[i].fileContent = fileContent;
            files[i].district = '';
        }
        res.status(200).send({isSuccess: true, message: 'success', data: files});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});


/* Get file By fileName*/
router.get('/getRoute/:routeId', basicAuth, async (req, res) => {
    const routeId = parseInt(req.params['routeId']);
    try {
        const file = await fileService.findById(routeId);
        if (!file) {
            res.status(404).send('File not found');
        }
        const filePath = path.join(__dirname, '../public/files/', routeId + '.gpx');
        const fileContent = await fileService.getFileContent(filePath);
        res.status(200).send({success: true, message: 'success', data: file, fileContent: fileContent});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});


router.post('/save', basicAuth,
    uploadConfig.single('file'),
    async (req, res) => {
        try {
            const file = req.file;
            if (!file) {
                res.status(400).send('No file uploaded.');
            }
            let isNew = req.params['isNew'] === 'true' ? true : false;
            if (isNew) {
                await fileService.create(req);
            } else {
                await fileService.update(req);
            }
            res.status(200).send(`Route saved`);
        } catch (err) {
            res.status(500).send({isSuccess: false, message: err.message});
        }
    });

// Default root route of file
router.get('/', basicAuth, (req, res) => {
    res.send('respond from File Router...');
});

module.exports = router;
