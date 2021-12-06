/**
 * require database configuration
 *
 */
 const db_config = require('../../../../../config/app-db/db.config');

 const Option = require('../option.model');

 const Status = require('../../../../sub.model/sub.status/model.status');

 /**
 * create allowed model
 * @type {Sequelize object}
 */
const OptionCompination = db_config.database.define('option_componations', {
      first_option: {
        type: db_config.Sequelize.STRING
      },
      first_type: {
        type: db_config.Sequelize.STRING
      },
      second_option: {
        type: db_config.Sequelize.STRING
      },
      second_type: {
        type: db_config.Sequelize.STRING
      },
      third_option: {
        type: db_config.Sequelize.STRING
      },
      third_type: {
        type: db_config.Sequelize.STRING
      },
      price: {
        type: db_config.Sequelize.FLOAT
      },
  }, {
    freezeTableName: true,
    underscored: true
});

//  /**
//  * create the alowed types association
//  * @type {String}
//  */
//   Option.hasOne(OptionCompination, {
//     foreignKey: 'option_id'
//   });
//   OptionCompination.belongsTo(Option, {});

//   /**
//  * create the alowed types association
//  * @type {String}
//  */
//    Option.hasOne(OptionCompination, {
//     foreignKey: 'second_option_id'
//   });
//   OptionCompination.belongsTo(Option, {});

//    /**
//  * create the alowed types association
//  * @type {String}
//  */
//     Option.hasOne(OptionCompination, {
//       foreignKey: 'theird_option_id'
//     });
//     OptionCompination.belongsTo(Option, {});

  /**
   * create the option status association
   * @type {String}
   */
   Status.hasOne(OptionCompination, {
    as: 'compination_status',
    foreignKey: 'status_id'
  });
  Option.belongsTo(OptionCompination, {});

 /**
 * exports allowed model
 * @type {Sequelize object}
 */
module.exports = OptionCompination;