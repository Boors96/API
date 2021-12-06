/**
 * require user model
 * @type {Model}
 */
const User = require('./user.model');


exports.createUser = (user) => {
  return User.create(
  user
).then((user) => {
    return user ;
  }).catch((err) =>{ return err });
};
