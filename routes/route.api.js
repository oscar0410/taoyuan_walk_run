const express = require('express');
const path = require("path");
const router = express.Router();
const uploadConfig = require('../config/upload.config');
const routeService = require('../services/tycgRoute.service');
const basicAuth = require('../middleware/basicAuth');

router.get('/getAll', async (req, res) => {
    try {
        const routes = await routeService.findAll();
        for (let i = 0; i < routes.length; i++) {
            const filePath = path.join(__dirname, '../public/files/', routes[i].file_name);
            const fileContent = await routeService.getFileContent(filePath);
            routes[i].fileContent = fileContent;
            routes[i].district = '';
        }
        res.status(200).send({isSuccess: true, message: 'success', data: routes});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});


/* Get file By fileName*/
router.get('/getRoute/:routeId', basicAuth, async (req, res) => {
    const routeId = parseInt(req.params['routeId']);
    try {
        const route = await routeService.findById(routeId);
        if (!route) {
            res.status(404).send('File not found');
        }
        const filePath = path.join(__dirname, '../public/files/', route.file_name);
        const fileContent = await routeService.getFileContent(filePath);
        res.status(200).send({success: true, message: 'success', data: route, fileContent: fileContent});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});


router.post('/save', basicAuth,
    uploadConfig.single('file'),
    async (req, res) => {
        try {
            const file = req.file;
            let isNew = req.query['isNew'] === 'true' ? true : false;
            if (isNew) {
                if (!file) {
                    res.status(400).send('No file uploaded.');
                }
                let newData = await routeService.create(req, file.originalname);

            } else {
                let route = await routeService.findById(req.body['route_id'])
                if(!file){
                    // 若沒上傳檔案則使用原始檔案名稱
                    await routeService.update(req, route.file_name)
                }else{
                    await routeService.update(req, file.originalname)
                }
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
