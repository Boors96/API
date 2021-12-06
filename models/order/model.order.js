/**
 * require database configuration
 *
 */
const db_config = require('./../../config/app-db/db.config');

const User = require('../user/user.model');

const Status = require('../sub.model/sub.status/model.status');

const Address = require('../sub.model/sub.address/address.model');

const OrderDelivery = require('./order.delivery/order.delivery.model');

/**
 * create order model
 * @type {Sequelize object}
 */
const Order = db_config.database.define('orders', {
  order_date: {
    type: db_config.Sequelize.DATE
  },
  confirm_date: {
    type: db_config.Sequelize.DATE
  },
  total_price: {
    type: db_config.Sequelize.FLOAT
  },
  delivery_price: {
    type: db_config.Sequelize.FLOAT
  },
  order_ref: {
    type: db_config.Sequelize.STRING
  },
}, {
  freezeTableName: true,
  underscored: true
});

/**
 * create the order user association
 * @type {String}
 */
 User.hasOne(Order, {
  as: 'order_user',
  foreignKey: 'user_id'
});
Order.belongsTo(User, {});

/**
 * create the order adddress association
 * @type {String}
 */
 Address.hasOne(Order, {
  as: 'order_address',
  foreignKey: 'address_id'
});
Order.belongsTo(Address, {});

/**
 * create the order delivery association
 * @type {String}
 */
 OrderDelivery.hasOne(Order, {
  as: 'order_delivery',
  foreignKey: 'delivery_id'
});
Order.belongsTo(OrderDelivery, {});

/**
 * create the order status association
 * @type {String}
 */
 Status.hasOne(Order, {
  as: 'order_status',
  foreignKey: 'status_id'
});
Order.belongsTo(Status, {});

/**
 * exports order model
 * @type {Sequelize object}
 */
module.exports = Order;