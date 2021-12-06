
const UserAddress = require('./address.model');

const User = require('../user.model');

const Address = require('../../sub.model/sub.address/address.model');

exports.insertUserAddress = (userAddress) => {
    return UserAddress.create(
        userAddress,
    ).then((addressResult) => {
        return addressResult;
    }).catch((err) => {
        console.error(err);
    });
};

exports.getAddressByUserId = (userId) => {
    return UserAddress.findAll({
        where: { user_id: userId},
        include: [
            {model: Address}
        ]
    }).then((addressResult) => {
        return addressResult;
    }).catch((err) => { return err; }); };