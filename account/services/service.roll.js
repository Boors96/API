/**
 * reqquer currancy handler model
 * @type {Model}
 */
const rollHandler = require('../../models/user/user.roll/roll.handler');

/**
 * reqquer object modifier model
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

/**
 * require services enviroment
 * @type {object}
 */
const _ = require('../../common/common.env/env');

exports.setRoll = (account) => {
  return insertRoll(account.roll).then((rollId, reject) => {
    return objModifier.addRemoveAttr(account,
      _.MOD_ENV.ROLL,
      _.MOD_ENV.ROLL_ID,
      rollId);
  }).catch((err) =>{ return err });
}


const insertRoll = (userRoll) => {
  return rollHandler.insertRoll(userRoll).then((roll, reject) => {
    return roll.dataValues.id
  }).catch((err) =>{ return err });
};

exports.getRollById = (userObject) => {
  return rollHandler.getRollById(userObject.roll_id).then((rollResult) => {
    return objModifier.addRemoveAttr(userObject, _.MOD_ENV.ROLL_ID, _.MOD_ENV.ROLL, rollResult.roll);
  }).catch((err) => {
    return err;
  });
};
