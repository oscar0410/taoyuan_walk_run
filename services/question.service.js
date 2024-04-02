// const userWalkLogModel = require('../models/userWalkLog.model');
const questionModel = require('../models/question.model');

/**
 * Asynchronous function to create walk logs from the request body and insert into the questionModel.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {Promise} a Promise that resolves after the walk logs are inserted
 */
const create = async (req) => {
    await questionModel.create(req.body);
}

module.exports = {
    create,
}
