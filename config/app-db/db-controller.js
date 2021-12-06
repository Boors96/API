const newConect = require('./connect');
const closeConect = require('./disconnect');

// start new connection
exports.connect = () => {
  newConect.connection();
};

// close connection
exports.disconnect = () => {
  closeConect.disconnect();
}
