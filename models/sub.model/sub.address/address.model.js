/**
 * require database configuration
 *
 */
const db_config = require('../../../config/app-db/db.config');

/**
 * create address model
 * @type {Sequelize object}
 */

const Address = db_config.database.define('addresses', {
  contry: {
    type: db_config.Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: db_config.Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: db_config.Sequelize.STRING,
    allowNull: false
  },
  street: {
    type: db_config.Sequelize.STRING
  },
  bulding: {
    type: db_config.Sequelize.STRING
  },
  // address_status_id: {
  //   type: db_config.Sequelize.INTEGER
  // }
}, {
  freezeTableName: true,
  underscored: true
});
/**
 * exports address model
 * @type {Sequelize object}
 */
module.exports = Address;
