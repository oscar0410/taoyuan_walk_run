const db = require('./index');
const dbConfig = require('../config/db.config');
const moment = require('moment-timezone');

class TycgRoute {
    constructor(routeId, routeName, fileName, lastUpdateTime) {
        this.id = routeId;
        this.route_name = routeName;
        this.updatedAt = lastUpdateTime;
        this.file_name = fileName;
    }

    static async findAll() {
        const {rows} = await db.executeSql('SELECT * FROM tycg_route ORDER BY id');
        return rows.map(row => new TycgRoute(row.id, row.route_name, row.file_name, moment(row.updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss')));
    }

    static async findById(routeId) {
        const {rows} = await db.executeSql('SELECT * FROM tycg_route WHERE id = $1', [routeId]);
        return new TycgRoute(rows[0].id, rows[0].route_name, rows[0].file_name, moment(rows[0].updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'));
    }

    static async create(routeName, fileName) {
        const {rows} = await db.executeSql('INSERT INTO tycg_route (route_name, file_name) VALUES ($1, $2) RETURNING *', [routeName, fileName]);
        return new TycgRoute(rows[0].id, rows[0].route_name, rows[0].file_name, moment(rows[0].updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'));
    }

    static async update(routeId, routeName, fileName) {
        const currentTimestamp = new Date();
        const {rows} = await db.executeSql('UPDATE tycg_route SET route_name = $1, "updatedAt" = $2, file_name = $3 WHERE id = $4 RETURNING *', [routeName, currentTimestamp, fileName, routeId]);
        return new TycgRoute(rows[0].id, rows[0].route_name, rows[0].file_name, moment(rows[0].updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'));
    }
}

module.exports = TycgRoute;
