/**
 * require database configuration
 *
 */
 const db_config = require('./../../../../config/app-db/db.config');

 const Status = require('../../../sub.model/sub.status/model.status');
 /**
 * create option model
 * @type {Sequelize object}
 */
const Option = db_config.database.define('options', {
  option_name: {
    type: db_config.Sequelize.STRING
  },
  type_name: {
    type: db_config.Sequelize.STRING
  },
  price: {
    type: db_config.Sequelize.FLOAT
  },
  }, {
    freezeTableName: true,
    underscored: true
  });

   /**
   * create the option status association
   * @type {String}
   */
    Status.hasOne(Option, {
      as: 'option_status',
      foreignKey: 'status_id'
    });
    Option.belongsTo(Status, {});

  /**
 * exports option model
 * @type {Sequelize object}
 */
module.exports = Option;