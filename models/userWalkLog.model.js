const db = require('./index');
const dbConfig = require('../config/db.config');
const moment = require('moment-timezone');

class UserWalkLog {

    /**
     * Creates walk logs from the request body and saves them to the database.
     * @param user_id
     * @param walk_timestamp
     * @param steps_count
     */
    constructor(user_id, city_cd, walk_timestamp, steps_count) {
        this.user_id = user_id;
        this.walk_timestamp = walk_timestamp;
        this.steps_count = steps_count;
    }

    static async findAllByUserId(userId) {
        const {rows} = await db.executeSql('SELECT * FROM user_walk_log WHERE user_id = $1', [userId]);
        return rows.map(row => new UserWalkLog(row.user_id, moment(row.walk_timestamp).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'), row.steps_count));
    }

    static async insert(userWalkLogs) {
        const querySql = "INSERT INTO user_walk_log (user_id, walk_timestamp, steps_count) VALUES ($1, $2, $3)";
        for (let i = 0; i < userWalkLogs.length; i++) {
            let user_id = userWalkLogs[i].user_id;
            let walk_timestamp = userWalkLogs[i].walk_timestamp;
            let steps_count = userWalkLogs[i].steps_count;
            await db.executeSql(querySql, [user_id, walk_timestamp, steps_count]);
        }
    }
}

module.exports = UserWalkLog;
