/**
 * require database configuration
 *
 */
 const db_config = require('../../../config/app-db/db.config');

 const User = require('../user.model');

 const Address = require('../../sub.model/sub.address/address.model');

 const UserAddress = db_config.database.define('user_address', {
    id: {
        type: db_config.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }
      }, {
    freezeTableName: true,
    underscored: true
  });

/**
 * create the address user association
 * @type {String}
 */
 User.hasMany(UserAddress, {
    as: 'user_address_user',
    foreignKey: 'user_id'
  });
  UserAddress.belongsTo(User, {});
  
  /**
   * create the address user association
   * @type {String}
   */
   Address.hasMany(UserAddress, {
    as: 'user_address_address',
    foreignKey: 'address_id'
  });
  UserAddress.belongsTo(Address, {});

module.exports = UserAddress;