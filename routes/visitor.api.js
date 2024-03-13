const express = require('express');
const router = express.Router();
const webRequestLogService = require('../services/websiteRequestLog.service');

const websiteName = 'tycg-running';

// Default root route of file
router.get('/', async (req, res) => {
    try {
        const visitorCount = await webRequestLogService.getWebSiteRequestCount(websiteName);
        res.status(200).send({isSuccess: true, message: 'success', data: visitorCount});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});

router.post('/add', async (req, res) => {
    try {
        const remote_ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        await webRequestLogService.create(websiteName, remote_ip_address);
        res.status(200).send({isSuccess: true, message: 'success'});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});

module.exports = router;
