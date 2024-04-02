const dbConfig = require('../config/db.config');
const { Sequelize, DataTypes } = require('sequelize');
const db = require("./index");
const moment = require("moment-timezone");

class Question {
    constructor(question_json) {
        this.question_json = question_json;
    }
    static async create(question_json) {
        const {rows} = await db.executeSql('INSERT INTO question (question_json) VALUES ($1) RETURNING *', [question_json]);
        return new Question(rows[0].question_json);
    }

}
module.exports = Question;
