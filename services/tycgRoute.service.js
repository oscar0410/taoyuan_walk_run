const tycgRouteModel = require('../models/tycgRoute.model');
const fs = require('fs');

const create = async (req, fileName) => {

   return await tycgRouteModel.create(req.body['route_name'],fileName);
}

const update = async (req, fileName) => {
   return await tycgRouteModel.update(req.body['route_id'], req.body['route_name'], fileName);
}

const updateTown = async (lng,lat, fileName) => {
    return await tycgRouteModel.updateTown(lng,lat, fileName);
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
const deleteRoute = async (routeId) => {
    return await tycgRouteModel.deleteRoute(routeId);
}

module.exports = {
    findAll, findById, create, update, getFileContent,updateTown,deleteRoute
}
