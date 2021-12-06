const sequlConfig = require('./db');

// close opening db connections
exports.disconnect = () => {
  sequlConfig.theSequelize.close();
}
