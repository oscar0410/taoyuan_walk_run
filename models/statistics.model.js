const db = require('./index');

class StatisticsModel {


    static async getCount(mission_detail) {
        const {rows} = await db.executeSql('select sum(duration) as 總步數,sum(distance) as 總距離' +
            ' from missioninfo where missionno in  ($1);', [mission_detail]);
        return rows[0];
    }

    static async getAccountCount(mission_main) {
        const {rows} = await db.executeSql('select count as 總人數 from mission where missionno in  ($1);', [mission_main]);
        return rows[0];
    }

}

module.exports = StatisticsModel;
