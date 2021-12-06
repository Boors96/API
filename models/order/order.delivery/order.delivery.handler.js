

const OrderDelivery = require('./order.delivery.model');

exports.insertDelivery = (delivery) => {
    return OrderDelivery.create(
        delivery
    ).then((deliveryResult) => {
        return deliveryResult;
    }).catch((err) => {
        return err;
    });
};

exports.getDeliveryById = (deliveryId) => {
    return deliverOrder.findOne({
        where: { id: deliveryId }
    }).then((deliveryResult) => {
        return deliveryResult
    }).catch((err) => {
        return err;
    });
};

exports.getDeliveryByType = (deliveryType) => {
    return deliverOrder.findOne({
        where: { delivery_type: deliveryType }
    }).then((deliveryResult) => {
        return deliveryResult
    }).catch((err) => {
        return err;
    });
};