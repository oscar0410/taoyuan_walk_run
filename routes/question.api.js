const express = require('express');
const router = express.Router();
const envConfig = require('../config/env.config');
const Question = require('../models/question.model');
const questionService = require("../services/question.service"); // 將這個路徑改成你的 Question 模型檔案的路徑

const websiteName = envConfig.WEBSITE_NAME;

router.post('/save', async (req, res) => {
    try {
        console.log(req.body)
        await questionService.create(req);
        res.status(201).send({isSuccess: true, message: 'success'});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});

module.exports = router;
