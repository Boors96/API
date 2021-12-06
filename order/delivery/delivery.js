
const deliveryHandler = require('../../models/order/order.delivery/order.delivery.handler');

const objModifier = require('../../obj/obj.modify');

const _ = require('../../common/common.env/env');

exports.createDelivery = (delivery) => {
    return deliveryHandler.insertDelivery(delivery).then((deliveryResult) => {
        return deliveryResult;
    }).catch((err) => {
        return err;
    });
};

exports.getDeliveryById = (order) => {
    return deliveryHandler.getDeliveryById(order.delivery_id).then((deliveryResult) => {
        return objModifier.addRemoveAttr(
            order, _.MOD_ENV.DELIV_ID, 
            _.MOD_ENV.DELIV_TYPE, 
            deliveryResult.delivery_type);
    }).catch((err) => {
        return err;
    });
};

exports.getDeliveryByType = (order) => {
    return deliveryHandler.getDeliveryByType(order.delivery_type).then((deliveryResult) => {
        return objModifier.addRemoveAttr(
            order, _.MOD_ENV.DELIV_TYPE,
            _.MOD_ENV.DELIV_ID,
            deliveryResult.id
        );
    }).catch((err) => {
        return err;
    });
};