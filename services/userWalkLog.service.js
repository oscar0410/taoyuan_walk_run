const userWalkLogModel = require('../models/userWalkLog.model');

/**
 * Asynchronous function to create walk logs from the request body and insert into the userWalkLogModel.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {Promise} a Promise that resolves after the walk logs are inserted
 */
const create = async (req) => {
    let walkLogs = [];
    for (let i = 0; i < req.body.length; i++) {
        walkLogs.push({
            user_id: req.body[i].user_id,
            walk_timestamp: req.body[i].walk_timestamp,
            steps_count: req.body[i].steps_count
        })
    }

    await userWalkLogModel.insert(walkLogs);
}

/**
 * Find all walk logs by user ID.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const findAllByUserId = async (req) => {
    const userId = req.query['userId']
    return await userWalkLogModel.findAllByUserId(userId);

}

module.exports = {
    create,
    findAllByUserId
}
