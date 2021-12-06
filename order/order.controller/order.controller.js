
const order = require('../order/order');

const document = require('../document/document');

const option = require('../option/option');

const compination = require('../option.compination/option.compination');

const orderPayment = require('../order.payment/order.payment');

const delivery = require('../delivery/delivery');

const { compose } = require('../../common/common.func/func.compose');

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of created order
 */
exports.createOrder = (req, res) => {
    return compose(
        order.createOrder,
        document.createDocument
    )(req).then((orderResult) => {
        res.status(200).send(orderResult);
    }).catch((err) =>{  res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of created option
 */
exports.createOption = (req, res) => {
    return option.createOption(req.body).then((optionResult) => {
        res.status(200).send(optionResult);
    }).catch((err) =>{ res.status(400).send(err) });
};

exports.createDelivery = (req, res) => {
return delivery.createDelivery(req.body).then((deliveryResult) => {
    return res.status(200).send(deliveryResult);
}).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of created compination
 */
exports.createCompination = (req, res) => {
    return compination.setCompination(req.body).then((compinationResult) => {
        res.status(200).send(compinationResult);
    }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of updated address
 */
exports.updateOrder = (req, res) => {
    return order.updateOrder(req.body).then((addressResult) => {
        res.status(200).send(addressResult);
    }).catch((err) =>{ res.status(400).send(err) });
}; 

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of updated option
 */
exports.setOption = (req, res) => {
    return document.updateDocument(req.body).then((documentResult) => {
        res.status(200).send(documentResult);
    }).catch((err) =>{ res.status(400).send(err)});
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of selected address
 */
exports.getOrderByStatus = (req, res) => {
    return order.getOrderByStatus(req.params.status).then((orderResult) => {
        res.status(200).send(orderResult);
    }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of selected order
 */
exports.getOrderById = (req, res) => {
    return order.getOrderById(req.body.order_id).then((orderResult) => {
        res.status(200).send(orderResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of selected order
 */
exports.getDocumentByOrder = (req, res) => {
    return document.getDocumentByOrderId(req.params.order_id).then((documentResult) => {
        res.status(200).send(documentResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of selected order
 */
exports.getDocumentByStatus = (req, res) => {
    return document.getDocumentByStatus(req.body.status).then((documentResult) => {
        res.status(200).send(documentResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all options
 */
exports.getOptions = (req, res) => {
    return option.getAllOptions().then((optionResult) => {
        res.status(200).send(optionResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all compinations
 */
exports.getOptionCompinations = (req, res) => {
    return compination.getCompinations().then((compinationResult) => {
        res.status(200).send(compinationResult);
    }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all document options
 */
exports.getDocumentOptions = (req, res) => {
    return option.getDocumentOptions(req.body.document_id).then((docOptionsResult) => {
        res.status(200).send(docOptionsResult);
  }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all uploaded documents
 */
exports.getAllUploaded = (req, res) => {
    return document.getAllUploaded().then((documentResult) => {
        return order.getOrderById(documentResult).then((orderResult) => {
            res.status(200).send(orderResult);
        }).catch((err) =>{ res.status(400).send(err) });    
    }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all Payed documents
 */
exports.getAllPayed = (req, res) => {
    return document.getAllPayed().then((payedResult) => {
        return order.getOrderById(payedResult).then((orderResult) => {
            res.status(200).send(orderResult);
        }).catch((err) =>{ res.status(400).send(err) });
    }).catch((err) =>{ res.status(400).send(err) });
};

/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all deliverd documents
 */
exports.getAllDelevered = (req, res) => {
    return document.getDelevered().then((deleverdResult) => {
        return order.getOrderById(deleverdResult).then((orderResult) => {
            res.status(200).send(orderResult);
        }).catch((err) =>{ res.status(400).send(err) });
    }).catch((err) =>{ res.status(400).send(err) });
};


/**
 * 
 * @param {requeit from the clinet} req 
 * @param {respomse to the clinet} res 
 * @returns code status and object of all user orders
 */
exports.getAllUserOrders = (req, res) => {
    return order.getOrderByUserId(req).then((orderResult) => {
        return document.getAllDocumentByOrderId(orderResult).then((documentResult) => {
            res.status(200).send(documentResult);
        }).catch((err) =>{ res.status(400).send(err) });
    }).catch((err) =>{ res.status(400).send(err) });
};

exports.updateDocuments = (req, res) => {
    return document.updateDocument(req.body).then((documentResult) => {
        res.status(200).send(documentResult);
    }).catch((err) =>{ res.status(400).send(err) });
};


exports.payOrder = (req, res) => {
    return orderPayment.orderPayment(req.params, res);
};

exports.getOrderPayment = (req, res) => {
    return orderPayment.getPaymentDetails(req.params, res);
};

exports.test = (req, res) => {
    console.log("yuhgrfktfjdkgtrhfjmkuygrjdk");
    res.send("ryghdjkgruhjdkgruhfjkgtrhfj");
}
