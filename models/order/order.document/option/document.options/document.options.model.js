/**
 * require database configuration
 *
 */
 const db_config = require('../../../../../config/app-db/db.config');

 const Option = require('../option.model');

 const Document = require('../../order.document.model');

 const Status = require('../../../../sub.model/sub.status/model.status');

 const DocumentOptions = db_config.database.define('document_options', {
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
 * create the order applicent association
 * @type {String}
 */
 Option.hasMany(DocumentOptions, {
    as: 'document_option_options',
    foreignKey: 'option_id'
  });
  DocumentOptions.belongsTo(Option, {});
  
  /**
   * create the order applicent association
   * @type {String}
   */
   Document.hasMany(DocumentOptions, {
    as: 'document_option_document',
    foreignKey: 'document_id'
  });
  DocumentOptions.belongsTo(Document, {});

/**
 * create the status document association
 * @type {String}
 */
 Status.hasOne(DocumentOptions, {
  as: 'document_option_status',
  foreignKey: 'status_id'
});
DocumentOptions.belongsTo(Status, {});

module.exports = DocumentOptions;