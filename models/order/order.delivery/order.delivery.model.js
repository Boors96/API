/**
 * require database configuration
 *
 */
const db_config = require('./../../../config/app-db/db.config');

/**
 * create order delivery model
 * @type {Sequelize object}
 */
const OrderDelivery = db_config.database.define('order_delivery', {
  delivery_type: {
    type: db_config.Sequelize.STRING
  }
}, {
  freezeTableName: true,
  underscored: true
});

/**
 * exports order delivery model
 * @type {Sequelize object}
 */
module.exports = OrderDelivery;
