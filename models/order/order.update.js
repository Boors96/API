
const Order = require('./model.order');

exports.updateOrder = (order) => {
    return Order.update(order,
        {where:{id: order.id}},
    ).then((orderResult) => {
        return orderResult;
    }).catch((err) =>{ return err });
};