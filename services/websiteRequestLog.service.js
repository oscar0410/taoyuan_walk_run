const WebSiteRequestModel = require('../models/webRequestLog.model');

/**
 *
 * @param webSiteName
 * @param ipAddress
 * @returns {Promise<void>}
 */
const create = async (webSiteName, ipAddress) => {
    await WebSiteRequestModel.insert(webSiteName, ipAddress);
}

/**
 *
 * @param websiteName
 * @returns {Promise<*>}
 */
const getWebSiteRequestCount = async (websiteName) => {
    return await WebSiteRequestModel.getWebSiteRequestCount(websiteName);
}

module.exports = {
    create,
    getWebSiteRequestCount
}
