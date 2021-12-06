
const Document = require('./order.document.model');

const DocumentOption = require('./option/document.options/document.options.model');

const OptionCompination = require('./option/option.compination/option.compination.model');

const Status = require('../../sub.model/sub.status/model.status');

exports.insertOrderDocument = (orderDocument) => {
    return Document.create(
        orderDocument
    ).then((documentResult) => {
        return documentResult;
    }).catch((err) =>{ return err });
};

exports.findDocumentByOrderId = (orderId) => {
    return Document.findAll({
        where: {order_id: orderId},
        include: [
            {model: OptionCompination},
            {model: Status}
        ]
    }).then((documentResult) => {
        return documentResult;
    }).catch((err) => {
        return err;
    });
};

exports.findDocumentByStatus = (statusId) => {
    return Document.findAll({
        where: {status_id: statusId},
        include: [
            {model: OptionCompination}
        ]
    }).then((documentResult) => {
        return documentResult;
    }).catch((err) => {
        return err;
    });
};

exports.updateDocument = (document) => {
    return Document.update(
        document,
        { where: { id: document.id } 
    }).then((documentResult) => {
        return documentResult;
    }).catch((err) => {
        return err;
    });
};