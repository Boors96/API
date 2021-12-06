/**
 * require the address handler model
 * @type {Model}
 */
const addressHandler = require('./../../models/sub.model/sub.address/address.handler');

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('./../../obj/obj.modify.js');

/**
 * require compose model
 * @type {Model}
 */
const compose = require('./../../common/common.func/func.compose');

const _ = require('../common.env/env');

exports.setAddress = (account) => {
  return insertAddress(account.address).then((addressId) => {
    return objModifier.addRemoveAttr(account,
      _.MOD_ENV.ADD,
      _.MOD_ENV.ADD_ID,
      addressId);
  }).catch(err => Error(err));
};

exports.changeAddress = (account) => {
  return addressHandler.updateAddress(account.address).then((addr) => {
    return addr.dataValues.id;
  }).catch(err => Error("Error: " + err));
};

const insertAddress = (address) => {
  return addressHandler.createAddress(address).then((addr) => {
    return addr.dataValues.id;
  }).catch(err => Error("Error: " + err));
};
