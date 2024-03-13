const db = require('./index');

class WebRequestLogModel {

    constructor(website_name, ip_address) {
        this.website_name = website_name;
        this.ip_address = ip_address;
    }

    static async getWebSiteRequestCount(websiteName) {
        const {rows} = await db.executeSql('SELECT COUNT(*) AS count FROM web_request_log WHERE website_name = $1', [websiteName]);
        return rows[0].count;
    }

    static async insert(website_name, ip_address) {
        const querySql = "INSERT INTO web_request_log (website_name, ip_address) VALUES ($1, $2)";
        await db.executeSql(querySql, [website_name, ip_address]);
    }
}

module.exports = WebRequestLogModel;
