
const addOrder = require('../../models/order/order.add');

const getOrder = require('../../models/order/order.get');

const updateOrder = require('../../models/order/order.update');

const status = require('../../common/common.services/service.status');

const objModifier = require('../../obj/obj.modify');

const { setUserId } = require('../../common/common.services/service.user');

const { promiseMap } = require('../../common/common.func/func.compose');

const { getCurrentDate } = require('../../common//common.services/service.date');

const { getUrl } = require('../../common/common.services/file.config');

const _ = require('../../common/common.env/env');

exports.createOrder = (req) => {
    return checkOrder(req) ? setOrderId(setServerUrl(req, req.body.document), req.headers.order_id) :
     status.setStatus(setOrdrObject(req)).then((statusResult) => {
        return addOrder.insertOrder(statusResult).then((orderResult) => {
            return setOrderId(setServerUrl(req, req.body.document), orderResult.id);
        }).catch((err) =>{ return err });
    }).catch((err) =>{ return err });
};

exports.updateOrder = (order) => {
    return order.status ? 
     status.setStatus(order).then((statusResult) => {
        return updateOrder.updateOrder(statusResult).then((orderResult) => {
            return orderResult;
        }).catch((err) =>{ return err });
    }).catch((err) => { return err }) : 
    updateOrder.updateOrder(order).then((orderResult) => {
        return orderResult;
    }).catch((err) =>{ return err });
};

exports.getOrderByUserId = (req) => {
    return getOrder.findOrderByUserId(req.headers.user_id).then((orderResult) => {
        return orderResult;
    }).catch((err) => {
        return err;
    });
};

exports.getOrderByStatus = (orderStatus) => {
    return status.getStatusId(orderStatus).then((statusResult) => {
        return getOrder.findOrderByStatus(statusResult.id).then((orderResult) => {
            return orderResult;
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    });
};

exports.getOrderById = (document) => {
    return getOrder.findOrderById(getOrderId(document)).then((orderResult) => {
        return promiseMap(orderResult, status.getStatus).then((orderStatusResult) => {
            return setOrdersObject(orderStatusResult, document);
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    });
}

const setOrderDate = (order) => {
    return objModifier.addAttr(order, _.MOD_ENV.ORD_DATE , getCurrentDate());
};

const checkOrder = (req) => {
    return req.headers.order_id;
};

const setServerUrl = (req, documentObject) => {
    return objModifier.addAttr(documentObject, _.MOD_ENV.FILE_PATH, getUrl(req)
    + _.UPL_DIR_TEST + req.file.filename);
};

const setOrderId = (object, orderId) => {
    return objModifier.addAttr(object, _.MOD_ENV.ORD_ID, orderId);
};

const setOrdrObject = (req) => {
    return setUserId(setOrderDate(objModifier.addAttr({}, _.MOD_ENV.ST, _.STATUSES.INIT_ORD)), req);
};

const getOrderId = (document) => {
    return document.reduce((ids, { order_id }) => {
        ids.push(order_id);
        return ids;
      }, []);
};


// const extractOptions = (documents, orderId) => {
//     return documents.filter(docs => docs.order_id == orderId)
// };

// const setOptionsObj = (documents, orders) => {
//     return orders.map((doc, index) => {
//         return objModifier.addAttr(doc, _.MOD_ENV.DOC, extractOptions(documents, index));
//     })
// };

const setOrdersObject = (order, documents) => {
    return order.map((ord, index) => {
        return objModifier.addAttr(ord, _.MOD_ENV.DOC,
            objModifier.getOneFromArrayOfObjects(documents, _.MOD_ENV.ORD_ID, ord.id
        ));
    });
};



// const setOrdersObject = (order, documents) => {
//     return Promise.all(
//         order.map((ord, index) => {
//             return status.getStatus(ord.user).then((userStatus) => {
//                 return objModifier.addAttr(objModifier.addAttr(
//                     objModifier.removeAttr(ord, _.MOD_ENV.USER),
//                      _.MOD_ENV.USER, objModifier.removeMultiAttr(
//                         userStatus, _.USER_REMOVE_ATTR
//                      )), _.MOD_ENV.DOC,
//                       objModifier.getOneFromArrayOfObjects(documents, _.MOD_ENV.ORD_ID, ord.id));
//             }).catch((err) => {
//                 return err;
//             });
//         })
//     );   
// };

