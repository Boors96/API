/**
 * require user model
 * @type {Model}
 */
const User = require('./user.model');

exports.updateUser = (user) => {
  return User.update(user, 
    { where: { id: user.id }}).then(() => {
    return;
  }).catch(err => console.log("Error: " + err));
};
