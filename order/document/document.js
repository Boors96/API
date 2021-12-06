
const documentHandller = require('../../models/order/order.document/order.document.handler');

const status = require('../../common/common.services/service.status');

const objModifier = require('../../obj/obj.modify');

const _ = require('../../common/common.env/env');

const { promiseMap } = require('../../common/common.func/func.compose');

exports.createDocument = (document) => {
    return status.setStatus(setInitialState(document)).then((statusResult) => {
        return documentHandller.insertOrderDocument(statusResult).then((documentResult) => {
            return documentResult;
        }).catch((err) =>{ return err });
    }).catch((err) =>{ return err });
};

exports.updateDocument = (document) => {
    return document.status ? status.setStatus(document).then((statusResult) => {
        return documentHandller.updateDocument(statusResult).then((documentResult) => {
            return documentResult;
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    }) : 
     documentHandller.updateDocument(statusResult).then((documentResult) => {
        return documentResult;
    }).catch((err) => {
        return err;
    });
}

exports.getDocumentByOrderId = (orderId) => {
    return documentHandller.findDocumentByOrderId(orderId).then((documentResult) => {
        return documentResult;
    }).catch((err) => {
        return err;
    });
};

exports.getAllDocumentByOrderId = (order) => {
    return documentHandller.findDocumentByOrderId(getOrderId(order)).then((documentResult) => {
        return setDocumentObject(order, documentResult);
    }).catch((err) => {
        return err;
    });
};

exports.getDocumentByStatus = () => {
    return status.getStatusId(status).then((statusResult) => {
        return documentHandller.findDocumentByStatus(statusResult.id).then((documentResult) => {
            return documentResult;
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    }); 
};

exports.getAllUploaded = () => {
    return getAllByStatus(_.STATUSES.UPLOAD).then((allUploadesResult) => {
        return promiseMap(allUploadesResult, status.getStatus).then((statusResult) => {
            return removeAttrs(statusResult);
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    }); 
};

exports.getAllPayed = () => {
    return getAllByStatus(_.STATUSES.PAYED).then((allPayedResult) => {
        return allPayedResult;
    }).catch((err) => {
        return err;
    }); 
};

exports.getDelevered = () => {
    return getAllByStatus(_.STATUSES.DELIVERED).then((allPayedResult) => {
        return allPayedResult;
    }).catch((err) => {
        return err;
    }); 
};

const getAllByStatus = (documentStatus) => {
    return status.getStatusId(documentStatus).then((statusResult) => {
        return documentHandller.findDocumentByStatus(statusResult.id).then((documentResult) => {
            return documentResult;
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    }); 
};

const setInitialState = (document) => {
    return objModifier.addAttr(document, _.MOD_ENV.ST, _.STATUSES.UPLOAD);
};

const removeAttrs = (document) => {
    return document.map((doc, index) => {
            return objModifier.removeMultiAttr(doc, _.DOCS_REMOVE_ATTR); 
    });
};

const getOrderId = (order, id) => {
    return order.reduce((ids, { id }) => {
        ids.push(id);
        return ids;
      }, []);
};

const setDocumentObject = (order, documents) => {
    return order.map((ord, index) => {
        return objModifier.addAttr(ord.dataValues, _.MOD_ENV.DOC,
            objModifier.getOneFromArrayOfObjects(documents, _.MOD_ENV.ORD_ID, ord.id
        ));
    });
};