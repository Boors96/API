
const Order = require('./model.order');

const User = require('../user/user.model');

const Address = require('../sub.model/sub.address/address.model');

const Phone = require('../phone-number/phone-number.model');

const Status = require('../sub.model/sub.status/model.status');

exports.findOrderByUserId = (userId) => {
    return Order.findAll({
        where: {user_id: userId},
        include: [
            { model: Address, as: 'address' },
            { model: Status, as: 'status'}]
    }).then((orderResult) => {
        return orderResult;
    }).catch((err) => {
        return err;
    });
};

exports.findOrderById = (orderId) => {
    return Order.findAll({
        where: {id: orderId},
        include: [
            { model: Address, as: 'address' },
            { model: Status, as: 'status'}]
    }).then((orderResult) => {
        return orderResult;
    }).catch((err) => {
        return err;
    });
};

exports.findOrderByMonth = (month) => {
    return Order.findAll({
        where: {order_date: month},
        include: [
            { model: Address, as: 'address' },
            { model: Status, as: 'status'}]
    }).then((orderResult) => {
        return orderResult;
    }).catch((err) => {
        return err;
    });
};

exports.findOrderByStatus = (statusId) => {
    return Order.findAll({
        where: {status_id: statusId},
        include: [
            { model: User, as: 'user' , include: [{model: Phone , as : 'phone'}]},
            { model: Address, as: 'address' }, 
            { model: Status, as: 'status'}]
    }).then((orderResult) => {
        return orderResult;
    }).catch((err) => {
        return err;
    });
};