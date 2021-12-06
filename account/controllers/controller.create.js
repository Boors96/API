/**
 * require address model
 * @type {Model}
 */
const address = require('../services/service.address');

/**
 * require roll model
 * @type {Model}
 */
const roll = require('../services/service.roll');

/**
 * require status model
 * @type {Model}
 */
const status = require('../../common/common.services/service.status');

/**
 * require phone model
 * @type {Model}
 */
const phone = require('../services/service.phone');

/**
 * require user model
 * @type {Model}
 */
const user = require('../services/service.user');

/**
 * require verification code model
 * @type {Model}
 */
const verificationCode = require('../services/service.verification-code');

/**
 * require compose model
 * @type {Model}
 */
const _compose = require('../../common/common.func/func.compose');

/**
 * require env model
 * @type {Model}
 */
const _ = require('../../common/common.env/env');

/**
 * require compose model
 * @type {Model}
 */
const checkAccount = require('../../auth/middlewares/check-account');

const { setUserId } = require('../../common/common.services/service.user');

/**
 * require hash model
 * @type {Model}
 */
const hash = require('../services/service.hash');

exports.createUser = (req, res) => {
  return checkAccount.checkUser(req.body).then((userResponse) => {
    return userResponse ? res.status(408).send("Account alrady exist") :
       _compose.compose(
        mutuals,
        roll.setRoll,
        hash.setHash,
        user.setUser,
        verificationCode.setVerificationCode
      )(req.body, res).then((response, reject) => {
        return res.status(200).send(response);
      }).catch(err => {
        res.status(400).send(err);
      });
  }).catch(err => res.status(400).send(err));
};

exports.updateUserData = (req, res) => {
  return user.updateUser(req.body).then((userresult) => {
    return res.status(200).send(userresult);
  }).catch((err) => {
    res.status(400).send(err);
  });
};

exports.addNewAddress = (req, res) => {
  return address.setAddress(setUserId(req.body, req)).then((addressResult) => {
     res.status(200).send(addressResult);
  }).catch((err) => {
    res.status(400).send(err);
  });
};

exports.getAllUsers = (req, res) => {
  return user.getUsers().then((userResult) => {
    res.status(200).send(userResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.getUserByEmail = (req, res) => {
  return user.getUserByEmail(req.params.user_email).then((userResult) => {
    res.status(200).send(userResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.getUserById = (req,res) => {
  return user.getUserById(req.params.user_id).then((userResult) => {
    res.status(200).send(userResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.getNotActiveUser = (req, res) => {
  return user.getNotActiveUser().then((userResult) => {
    res.status(200).send(userResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.getActiveUser = (req, res) => {
  return user.getActiveUser().then((userResult) => {
    res.status(200).send(userResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.getSuspendedUser = (req, res) => {
  return user.getSuspendedUser().then((userResult) => {
    res.status(200).send(userResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.getUserAddress = (req, res) => {
  return address.getUserAddress(req.params.user_id).then((addressResult) => {
    res.status(200).send(addressResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.activateUser = (req, res) => {
  return user.activateUser(req.body).then((activateResult) => {
    res.status(200).send(activateResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

exports.suspendUser = (req, res) => {
  return user.suspendUser(req.body).then((suspendResult) => {
    res.status(200).send(suspendResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

const mutuals = (req, res) => {
  return _compose.compose(
    phone.setPhone,
    status.setStatus,
  )(req, res).then((account) => {
    return account;
  }).catch(err => {
    return err;
  });
};