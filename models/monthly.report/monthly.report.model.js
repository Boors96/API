/**
 * require database configuration
 *
 */
 const { Model } = require('sequelize/types');
const db_config = require('./../../config/app-db/db.config');

 /**
 * create monthly report model
 * @type {Sequelize object}
 */
const MonthlyReport = db_config.database.define('monhtly_reports', {
    month: {
      type: db_config.Sequelize.DATE
    },
    report_date: {
      type: db_config.Sequelize.DATE
    },
    orders: {
      type: db_config.Sequelize.FLOAT
    },
    cancled_orders: {
        type: db_config.Sequelize.FLOAT
    },
    total_orders: {
        type: db_config.Sequelize.FLOAT
    },
    delivery: {
        type: db_config.Sequelize.FLOAT
    },
    cancled_delivery: {
        type: db_config.Sequelize.FLOAT
    },
    total_delivery: {
        type: db_config.Sequelize.FLOAT
    },
    net: {
        type: db_config.Sequelize.FLOAT
    },
    vat_net: {
        type: db_config.Sequelize.FLOAT
    },
  }, {
    freezeTableName: true,
    underscored: true
  });

  module.exports = MonthlyReport;