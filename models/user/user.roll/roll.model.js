const db_config = require('../../../config/app-db/db.config');

/**
 * create company and user relationship model
 * @type {Sequelize object}
 */
const CompanyUserRelation = db_config.database.define('user_roll', {
  roll: {
    type: db_config.Sequelize.STRING
  }
});

/**
 * exports the company user relationship model
 * @type {Sequelize object}
 */
module.exports = CompanyUserRelation;
