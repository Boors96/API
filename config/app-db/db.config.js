const SequelizeObject = require('sequelize');
const db = require('./db');

module.exports = {
  "Sequelize": SequelizeObject,
  "database": db
}
