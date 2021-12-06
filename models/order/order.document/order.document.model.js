/**
 * require database configuration
 *
 */
const db_config = require('../../../config/app-db/db.config');

const OptionCompination = require('./option/option.compination/option.compination.model');

const Order = require('../model.order');

const Status = require('../../sub.model/sub.status/model.status');

/**
 * create orderd document model
 * @type {Sequelize object}
 */
const Document = db_config.database.define('documents', {
  file_path: {
    type: db_config.Sequelize.STRING
  },
  pages_num: {
    type: db_config.Sequelize.INTEGER
  },
  quantity: {
    type: db_config.Sequelize.INTEGER
  },
  document_price: {
    type: db_config.Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  underscored: true
});

/**
 * create the order document association
 * @type {String}
 */
 Order.hasOne(Document, {
  as: 'order_document',
  foreignKey: 'order_id'
});
Document.belongsTo(Order, {});

/**
 * create the option componation document association
 * @type {String}
 */
 OptionCompination.hasOne(Document, {
  as: 'document_option_componation',
  foreignKey: 'option_componation_id'
});
Document.belongsTo(OptionCompination, {});

/**
 * create the status document association
 * @type {String}
 */
 Status.hasOne(Document, {
  as: 'document_status',
  foreignKey: 'status_id'
});
Document.belongsTo(Status, {});

/**
 * exports orderd document model
 * @type {Sequelize object}
 */
module.exports = Document;