/**
 * require database configuration
 *
 */
const db_config = require('../../config/app-db/db.config');

/**
 * require the Status model
 * @type {Model}
 */
const Status = require('../sub.model/sub.status/model.status');

/**
 * require the User Roll model
 * @type {Model}
 */
const UserRoll = require('./user.roll/roll.model');

/**
 * require the User Phone Number model
 * @type {Model}
 */
const Phone = require('../phone-number/phone-number.model');

const Address = require('../sub.model/sub.address/address.model');

/**
 * create user model
 * @type {Sequelize object}
 */
const User = db_config.database.define('users', {
  name: {
    type: db_config.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db_config.Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: db_config.Sequelize.STRING,
    allowNull: false
  },
  verification_code: {
    type: db_config.Sequelize.STRING,
    // allowNull: false
  },
}, {
  freezeTableName: true,
  underscored: true,
  charset: 'utf8',
  collate: 'utf8_general_ci',
});

/**
 * create the user roll association
 * @type {String}
 */
UserRoll.hasOne(User, { as: 'user_roll' , foreignKey: 'user_roll_id' });
User.belongsTo(UserRoll);

/**
 * create the user roll association
 * @type {String}
 */
Phone.hasOne(User, { as: 'user_phone' , foreignKey: 'phone_id' });
User.belongsTo(Phone);

/**
 * create the company status association
 * @type {String}
 */
 Status.hasOne(User, { as: 'user_status' , foreignKey: 'status_id' });
 User.belongsTo(Status);

/**
 * exports user model
 * @type {Sequelize object}
 */
module.exports = User;
