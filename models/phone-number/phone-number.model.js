/**
 * require database configuration
 *
 */
const db_config = require('../../config/app-db/db.config');

/**
 * create phone model
 * @type {Sequelize object}
 */
const Phone = db_config.database.define('phone', {
  phone: {
    type: db_config.Sequelize.STRING
  }
});

/**
 * exports phone model
 * @type {Sequelize object}
 */
module.exports = Phone;
