/**
 * require the phone handler model
 * @type {Model}
 */
const phoneHandler = require('../../models/phone-number/phone-number.handler');

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

const _ = require('./service.env');

exports.setPhone = (account) => {
  return insertPhone(account.phone).then((phoneId) => {
    return objModifier.addRemoveAttr(account,
      _.PHONE,
      _.PHONE_ID,
      phoneId);
  }).catch((err) =>{ return err });
};

exports.changePhone = (account) => {
  return phoneHandler.updatePhone(account.phone).then((ph) => {
    return ph.dataValues.id
  }).catch((err) =>{ return err });
}

const insertPhone = (phone) => {
  return phoneHandler.createPhone(phone).then((ph) => {
    return ph.dataValues.id
  }).catch((err) =>{ return err });
};
