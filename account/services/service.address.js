/**
 * require the address handler model
 * @type {Model}
 */
const addressHandler = require('../../models/sub.model/sub.address/address.handler');

const userAddressHandler = require('../../models/user/user.address/address.handler');

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

const _ = require('./service.env');

exports.setAddress = (account) => {
  return insertAddress(account).then((addressId) => {
    return userAddressHandler.insertUserAddress(objModifier.addRemoveAttr(account,
      _.ADD,
      _.ADD_ID,
      addressId));
  }).catch(err => Error(err));
};

exports.changeAddress = (account) => {
  return addressHandler.updateAddress(account.address).then((addr) => {
    return addr.id;
  }).catch(err => Error("Error: " + err));
};

const insertAddress = (address) => {
  return addressHandler.createAddress(address).then((addr) => {
    return addr.id;
  }).catch(err => Error("Error: " + err));
};

exports.getUserAddress = (userId) => {
  return userAddressHandler.getAddressByUserId(userId).then((userAddress) => {
    return userAddress;
  }).catch((err) => {
    return err;
  });
};
