/**
 * require User model
 * @type {Model}
 */
const User = require('./user.model');

/**
 * require Status model
 * @type {Model}
 */
const Status = require('../sub.model/sub.status/model.status');

/**
 * require Address model
 * @type {Model}
 */
const Address = require('../sub.model/sub.address/address.model');

/**
 * require UserRoll model
 * @type {Model}
 */
const UserRoll = require('./user.roll/roll.model');

/**
 * require Phone model
 * @type {Model}
 */
const Phone = require('../phone-number/phone-number.model');
const { ThemeProvider } = require('@material-ui/styles');

/**
 * fetch all user data and associated data by user id
 * @param  {int} id the user id
 * @return {Object}    contains user data and user associated data
 */
exports.getById = (id) => {
  return User.findOne(
    {where: {id: id},
    include: [
      { model: Status, as: 'status' },
      { model: UserRoll, as: 'user_roll' },
      { model: Phone, as: 'phone' }
    ]}
  ).then((user) => {
    return user;
  }).catch((err) =>{ return err });
};

/**
 * fetch all user data and associated data by user id
 * @param  {int} id the user id
 * @return {Object}    contains user data and user associated data
 */
exports.getAllByEmail = (email) => {
  return User.findOne(
    {where: {email: email},
    include: [
      { model: Status, as: 'status'},
      { model: UserRoll, as: 'user_roll' },
      { model: Phone, as: 'phone' }
    ]}
  ).then((user) => {
    return user;
}).catch((err) =>{ return err });
};

 /**
  * fetch all user data and associated data by user email
  * @param  {String} email the user email
  * @return {Object}    contains user data and user associated data
  */
exports.getIDByEmail = (email) => {
  return User.findOne(
    {where: {email: email}},
    {attributes: ['id']}
  ).then((user) => {
    return user;
  }).catch((err) =>{ return err });
};


exports.getAllUsers = () => {
  return User.findAll(
    {include: [
      { model: Status, as: 'status'},
      { model: UserRoll, as: 'user_roll' },
      { model: Phone, as: 'phone' }
    ]}
  ).then((userResult) => {
    return userResult;
  }).catch((err) => { return err; });
};

exports.getUserByStatus = (statusId) => {
  return User.findAll(
    {where: {status_id: statusId},
    include: [
      { model: Status, as: 'status'},
      { model: UserRoll, as: 'user_roll' },
      { model: Phone, as: 'phone' }]
    }).then((userResult) => {
    return userResult;
  }).catch((err) => {
    return err;
  });
}
