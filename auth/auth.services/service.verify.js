
const getUser = require('../../models/user/user.get');

const updateUser = require('../../models/user/user.update');

const status = require('../../common/common.services/service.status');

const objModifier = require('../../obj/obj.modify');

const _ = require('../../common/common.env/env');

exports.verifyCode = (req, res) => {
  return getUser.getById(req.params.id).then((user) => {
    return user.dataValues.verification_code === req.params.vcode ?
    activateAccount(req.params.id).then(() => {
      return {
        user: modifyUserObj(user.dataValues),
        error: null
      };
    }).catch((err) => {
      return err;
    }) :
       {
        user: null,
        error: [_.ERR_MSG.INVALID_COD_MSG]
      };
  }).catch(err => console.log("Error: " + err));
};

const modifyUserObj = (user) => {
  return objModifier.removeAttr(objModifier.removeAttr(user, _.MOD_ENV.PASS), _.MOD_ENV.V_CODE);
};

const activateAccount = (userId) => {
  return setUerObj(userId).then((userResult) => {
    return updateUser.updateUser(userResult).then((updateResult) => {
      return updateResult;
    }).catch((err) => { return err; });
  }).catch((err) => { return err });
};

const setUerObj = (userId) => {
  return status.setStatus(
    objModifier.addAttr(objModifier.addAttr(
    objModifier.addAttr({}, _.MOD_ENV.ID, userId), 
    _.MOD_ENV.V_CODE, _.MOD_ENV.EMPT_STRING), 
    _.MOD_ENV.ST, _.STATUSES.ACT)).then((statusResult) => {
      return statusResult;
    }).catch((err) => {
      return err;      
    });;
};
