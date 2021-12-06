/**
 * require the user model
 * @type {Model}
 */
const addUser = require('../../models/user/user.add');

const getUser = require('../../models/user/user.get');

const updateUser = require('../../models/user/user.update');

const userRoll = require('./service.roll');

const status = require('../../common/common.services/service.status');

const objModifier = require('../../obj/obj.modify');

const _ = require('../../common/common.env/env');

exports.setUser = (account) => {
  return addUser.createUser(account).then((user) => {
    return user.dataValues;
  }).catch((err) =>{ return err });
};

exports.updateUser = (user) => {
  return updateService(user).then((userResult) => {
    return userResult;
  }).catch((err) => { return err });
};

exports.getUsers = () => {
  return getUser.getAllUsers().then((userResult) => {
    return userResult;
  }).catch((err) => { return err; });
};

exports.getUserById = (userId) => {
  return getUser.getById(userId).then((userResult) => {
    return userResult;
  }).catch((err) => { return err; });
};

exports.getUserByEmail = (userEmail) => {
  return getUser.getAllByEmail(userEmail).then((userResult) => {
    return userResult;
  }).catch((err) => { return err; });
};

exports.getNotActiveUser = () => {
  return getUserByStatus(_.STATUSES.NOT_ACT).then((userResult) => {
    return userResult;
  }).catch((err) => {
    return err;
  });
};

exports.getActiveUser = () => {
  return getUserByStatus(_.STATUSES.ACT).then((userResult) => {
    return userResult;
  }).catch((err) => {
    return err;
  });
};

exports.getSuspendedUser = () => {
  return getUserByStatus(_.STATUSES.SUSB).then((userResult) => {
    return userResult;
  }).catch((err) => { return err;  });
};

const getUserByStatus = (userStatus) => {
  return status.getStatusId(userStatus).then((statusResult) => {
    return getUser.getUserByStatus(statusResult.id).then((userResult) => {
      return userResult;
    }).catch((err) => {
      return err;
    });
  }).catch((err) => {
    return err;
  });
};

exports.suspendUser = (user) => {
  return updateService(
    objModifier.addAttr(user, _.MOD_ENV.ST, _.STATUSES.SUSB)
  ).then((suspendResult) => {
    return suspendResult;
  }).catch((err) => { return err });
};

exports.activateUser = (user) => {
  return updateService(
    objModifier.addAttr(user, _.MOD_ENV.ST, _.STATUSES.ACT)
  ).then((activateResult) => {
    return activateResult;
  }).catch((err) => { return err });
};

const getUserRoll = (rollId) => {
  return userRoll.getRollById(rollId).then((rollResult) => {
    return rollResult;
  }).catch((err) => { return err; });
};

const updateService = (user) => {
  return user.status ? status.setStatus(user).then((statusResult) => {
    updateUser.updateUser(statusResult).then((userResult) => {
      return userResult;
    }).catch((err) => { return err; });
  }).catch((err) => {
    
  }) : updateUser.updateUser(user).then((userResult) => {
    return userResult;
  }).catch((err) => { return err; }); 
};