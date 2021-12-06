/**
 * require the address model
 * @type {Model}
 */
const Address = require('./address.model');

/**
 * create new address
 * @param  {JSON object} address contains the address data
 * @return {JSON object}         contains the address data created
 */
exports.createAddress = (address) => {
  return Address.create(
  address
).then((address) => {
    return address;
  }).catch(err => console.log("Error: " + err));
};

exports.updateAddress = (address) => {
  return Address.update(
    {where: { id: address.id }},
    address
  ).then((addr) => {
      return addr;
  }).catch(err => console.log("Error: " + err));
};

/**
 * returns addres data
 * @param  {int} addressId is the id of address to be returned
 * @return {JSON object}           contains the data of the address
 */
exports.getAddressById = (addressId) => {

};

/**
 * modifies the data of the address
 * @param  {JSON object} address contains the data of the address to be modified
 * @return {JSON}         returns json object contains the new address data
 */
exports.modifyAddress = (address) => {

};
