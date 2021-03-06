'use strict';
import user from './user';
import citation from './citationModel';
import expense from './expenseModel';
import timeCard from './timeCardModel';
import ptoRequest from './ptoRequestModel';
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const db = {
    user: user(sequelize, Sequelize),
    timeCard: timeCard(sequelize, Sequelize),
    expense: expense(sequelize, Sequelize),
    citation: citation(sequelize, Sequelize),
    ptoRequest: ptoRequest(sequelize, Sequelize)
};
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;