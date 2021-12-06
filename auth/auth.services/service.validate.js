
const getUser = require('../../models/user/user.get');

const status = require('../../common/common.services/service.status');

const hash = require('../middlewares/create-hash');

const _ = require('../../common/common.env/env');

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

const compose = require('../../common/common.func/func.compose');

exports.validatePassword = (user) => {
  return getUser.getAllByEmail(user.email).then((userResult) => {
    return checkUserExist(userResult) ? modifyResReq(user, userResult) : {error : _.ERR_MSG.INVALID_LOGIN_DATA} ;
  }).catch(err => Error(err));
};

const splitSalt = (pass) => {
  return pass.split('$');
};

const checkUserExist = (user) => {
  return user ? true : false ;
};

const matchPassword = (dbPass, userPss) => {
   return dbPass === userPss;
};

const setResBody = (user, userResult) => {
   return matchPassword(
    splitSalt(userResult.dataValues.password)[0],
     hash.dehashString(user.password,
       splitSalt(userResult.dataValues.password)[1]
     )) ? {response: userResult.dataValues} :  {error: _.ERR_MSG.INVALID_LOGIN_DATA};
};

const setReqBody = (userObj) => {
  return !userObj.error ? 
   objModifier.addAttr(userObj, _.HTTP_OBJ.REQ, userObject(userObj)) : 
   objModifier.addAttr(userObj, _.HTTP_OBJ.REQ, userObj);
};

const modifyResReq = (user, userResult) => {
  return checkIfActive(userResult).then((activeResult) => {
    return activeResult ? 
    setReqBody(setResBody(user, userResult)) : 
    {error: _.ERR_MSG.ACC_NOT_ACT}
  }).catch((err) => { return err; }); 
};

const checkIfActive = (user) => {
  return status.getStatus(user).then((statusResult) => {
    return statusResult.status === _.STATUSES.ACT ? true : false;
  }).catch((err) => { return err; });
};

const userObject = (userObj) => {
  return {
    user_id: userObj.response.id,
    email: userObj.response.email,
    roll: userObj.response.roll,
    name: userObj.response.name
  };
};