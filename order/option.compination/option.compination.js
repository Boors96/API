
const compinationHandler = require('../../models/order/order.document/option/option.compination/option.compination.handler');

const status = require('../../common/common.services/service.status');

const { mapObjectToArrayofObject } = require('../../common/common.func/func.compose');

exports.setCompination = (compination) => {
    return status.setStatus(compination).then((statusResult) => {
        return compinationHandler.createCompination(statusResult).then((componationResult) => {
            return componationResult;
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        return err;
    });
};

exports.getCompinations = () => {
    return compinationHandler.findCompination().then((compinationResult) => {
        return compinationResult;
    }).catch((err) => {
        return err;
    });
};

exports.getCompinationById = (documents) => {
    return compinationHandler.findCompinationById(getDocumentId(documents)).then((compinationResult) => {
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnn " + JSON.stringify(compinationResult));
        return mapObjectToArrayofObject(documents, removeAttrs(compinationResult));
    }).catch((err) => {
        return err;
    });
};

const getDocumentId = (document) => {
    return document.reduce((ids, { id }) => {
        ids.push(id);
        return ids;
      }, []);
};