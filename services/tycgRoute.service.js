const tycgRouteModel = require('../models/tycgRoute.model');
const fs = require('fs');

const create = async (req) => {

    await tycgRouteModel.create(req.body['route_name']);
}

const update = async (req) => {
    await tycgRouteModel.update(req.body['route_id'], req.body['route_name']);
}

const findAll = async () => {
    return await tycgRouteModel.findAll();
}

const findById = async (routeId) => {
    return await tycgRouteModel.findById(routeId);
}

const getFileContent = async (filePath) => {

    return fs.readFileSync(filePath, {encoding: 'utf8'});
}

module.exports = {
    findAll, findById, create, update, getFileContent
}
