
const Order = require('./model.order');

exports.insertOrder = (order) => {
    return Order.create(
        order
    ).then((ord) => {
            return ord;
    }).catch((err) =>{ return err });
};

exports.updateOrderStatus = (order) => {
    return Order.update({
        status_id: order.status_id
    },
    {
        where: {id: order.id}
    }).then((orderStatus) => {
        return orderStatus;
    }).catch((err) =>{ return err });
}