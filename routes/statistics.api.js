const express = require('express');
const router = express.Router();
const statisticsService = require('../services/statistics.service');

router.get('/getStatistics/:area', async (req, res) => {
    try {
        const area = req.params['area']
        //主要mission_no 桃園 or高雄
        let mission_no_main=''
        //主要任務下面的次要任務 桃園跑步,打卡
        let mission_no_detail=''

        if (area==='tycg') {
            mission_no_main='59240400'
            mission_no_detail='59240402'
        }else if(area==='kcg'){
            mission_no_main='58240100'
            mission_no_detail='58240003'
        }
        const data = await statisticsService.getStatistics(mission_no_main,mission_no_detail)
        console.log(data);
        // for (let i = 0; i < routes.length; i++) {
        //     const filePath = path.join(__dirname, '../public/files/', routes[i].file_name);
        //     const fileContent = await routeService.getFileContent(filePath);
        //     routes[i].fileContent = fileContent;
        //     routes[i].district = '';
        // }
        res.status(200).send({isSuccess: true, message: 'success', data: data});
    } catch (err) {
        res.status(500).send({isSuccess: false, message: err.message});
    }
});



module.exports = router;
