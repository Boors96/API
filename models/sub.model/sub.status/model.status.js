/**
 * require database configuration
 *
 */
const db_config = require('../../../config/app-db/db.config');

/**
 * create status model
 * @type {Sequelize object}
 */
const Status = db_config.database.define('status', {
  status: {
    type: db_config.Sequelize.STRING
  }
});

/**
 * exports ststus model
 * @type {Sequelize object}
 */
module.exports = Status;
