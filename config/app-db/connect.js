const sequlConfig = require('./db');

// establish new db connection
exports.connection = () => {
  sequlConfig.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))
}
