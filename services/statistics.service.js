const StatisticsModel = require('../models/statistics.model');


/**
 *
 * @returns {Promise<*>}
 */
const getStatistics = async (mission_main, mission_detail) => {

    try {
        const missionDetailCount = await StatisticsModel.getCount(mission_detail);
        const missionMainCount = await StatisticsModel.getAccountCount(mission_main);
        const participantsCount = await StatisticsModel.getParticipantsCount();
        return {
            missionDetailCount,
            missionMainCount,
            participantsCount
        };
    } catch (error) {
        // 錯誤處理
        console.error("Error combining results:", error);
        throw error;
    }
    return await StatisticsModel.getCount()
}
// 調用函數並處理返回的結果
getStatistics()
    .then(combined => {
        console.log("Combined results:", combined);
    })
    .catch(err => {
        console.error("Error:", err);
    });

module.exports = {
    getStatistics
}
