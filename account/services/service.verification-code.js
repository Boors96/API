/**
 * require the user update model
 * @type {Model}
 */
const updateUser = require('../../models/user/user.update');

/**
 * require the get user model
 * @type {Model}
 */
const getUser = require('../../models/user/user.get');

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

/**
 * require crypto model
 * @type {Model}
 */
const crypto = require('crypto');

const _ = require('./service.env');

const sendVCode = require('../../auth/auth.services/service.email');

exports.setVerificationCode = (userObject) => {
    Promise.resolve(crypto.randomBytes(64).toString('hex')).then((code) => {
      return updateUser.updateUser({ id: userObject.id, verification_code: code }).then(() => {
        return sendEmail(userObject.id, userObject.email, code).then((info) => {
          return info;
        }).catch((err) => {return err});
      }).catch((err) => { return err});
  }).catch((err) => { return err});
};

const sendEmail = (userId, userEmail, code) => {
  const vLink = _.V_LINK_TEST.concat(userId, '/', code);
  return sendVCode.email(userEmail, _.EMAIL_SUBJ.SEND_VCODE, vLink).then((info) => {
    return info;
  }).catch((err) => { return err });
};
