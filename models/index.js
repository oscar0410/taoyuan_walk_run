const dbConfig = require('../config/db.config');
const {Pool} = require('pg');
const pool = new Pool({
    user: dbConfig.USER,
    host: dbConfig.HOST,
    database: dbConfig.DB,
    password: dbConfig.PASSWORD,
    port: 5432,
    // Set timezone to UTC+8
    timezone: dbConfig.TIMEZONE, // You can use any other city that is in UTC+8
});
module.exports = {
    executeSql: (sql, params) => pool.query(sql, params)
};
