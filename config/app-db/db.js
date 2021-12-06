const Sequelize = require('sequelize');


module.exports = new Sequelize('printout-db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
        timestamps: false
    }
});
