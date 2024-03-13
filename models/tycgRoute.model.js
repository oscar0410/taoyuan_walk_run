const db = require('./index');
const dbConfig = require('../config/db.config');
const moment = require('moment-timezone');

class TycgRoute {
    constructor(routeId, routeName, lastUpdateTime) {
        this.id = routeId;
        this.route_name = routeName;
        this.updatedAt = lastUpdateTime;
    }

    static async findAll() {
        const {rows} = await db.executeSql('SELECT * FROM tycg_route ORDER BY id');
        return rows.map(row => new TycgRoute(row.id, row.route_name, moment(row.updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss')));
    }

    static async findById(routeId) {
        const {rows} = await db.executeSql('SELECT * FROM tycg_route WHERE id = $1', [routeId]);
        return new TycgRoute(rows[0].id, rows[0].route_name, moment(rows[0].updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'));
    }

    static async create(routeName) {
        const {rows} = await db.executeSql('INSERT INTO tycg_route (route_name) VALUES ($1) RETURNING *', [routeName]);
        return new TycgRoute(rows[0].id, rows[0].route_name, moment(rows[0].updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'));
    }

    static async update(routeId, routeName) {
        const currentTimestamp = new Date();
        const {rows} = await db.executeSql('UPDATE tycg_route SET route_name = $1, "updatedAt" = $2 WHERE id = $3 RETURNING *', [routeName, currentTimestamp, routeId]);
        return new TycgRoute(rows[0].id, rows[0].route_name, moment(rows[0].updatedAt).tz(dbConfig.TIMEZONE).format('YYYY-MM-DD HH:mm:ss'));
    }
}

module.exports = TycgRoute;
