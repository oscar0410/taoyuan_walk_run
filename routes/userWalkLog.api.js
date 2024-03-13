const express = require('express');
const router = express.Router();
const walkLogService = require('../services/userWalkLog.service');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource from userWalk api...');
});

router.post('/create', async (req, res) => {
    try {
        await walkLogService.create(req);
        res.status(201).send({isSuccess: true, message: 'success'});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});
// router.get('/findAllByUserId', async (req, res) => {
//     try {
//         const foundUsers = await walkLogService.findAllByUserId(req);
//         res.status(200).send({isSuccess: true, message: 'success', data: foundUsers});
//     } catch (err) {
//         res.status(500).send({isSuccess: false, message: err.message});
//     }
// });

module.exports = router;
