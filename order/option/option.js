
const documentOptionHandller = require('../../models/order/order.document/option/document.options/document.options.handler');

const optionHandler = require('../../models/order/order.document/option/option.handler');

const status = require('../../common/common.services/service.status');

const { promiseMap, mapObjectToArrayofObject } = require('../../common/common.func/func.compose');

const objModifier = require('../../obj/obj.modify');

const _ = require('../../common/common.env/env');
const { options } = require('superagent');

exports.createOption = (option) => {
    return status.setStatus(option).then((statusResult) => {
        return optionHandler.insetOption(statusResult).then((optionResult) => {
            return optionResult;
        }).catch((err) =>{ return err });
    }).catch((err) =>{ return err });
};

exports.setDocumentOption = (options) => {
    return promiseMap(setDocumentId(options), status.setStatus).then((statusResult) => {
        return documentOptionHandller.createDocumentOptions(statusResult).then((docOptResult) => {
            return options;
        }).catch((err) =>{ return err });
    }).catch((err) => {
        return err;
    });
};

exports.getAllOptions = () => {
    return optionHandler.findAllOptions().then((optionResult) => {
        return optionResult;
    }).catch((err) => {
        return err;
    });
};

exports.getOptionById = (optionId) => {
    return optionHandler.findOptionById(optionId).then((optionResult) => {
        return optionResult;
    }).catch((err) => {
        return err
    });
};

exports.getDocumentOptions = (documents) => {
    return status.getStatusId(_.STATUSES.ACT).then((statusResult) => {
        return documentOptionHandller.findDocumentOptionByDocId(
            getDocumentId(documents), statusResult.id).then((docOptionsResult) => {
            return promiseMap(docOptionsResult, status.getStatus).then((statusResult) => {
                return mapObjectToArrayofObject(documents, removeAttrs(statusResult));
            }).catch((err) => {
                return err;
            });
        }).catch((err) => {
            return err;
        });
    }).catch((err) => {
        
    });
};

const setDocumentId = (options) => {
    return options.options.map((opt) => {
       return objModifier.addAttr(opt, _.MOD_ENV.DOC_ID, options.document_id);
    });
};

const getDocumentId = (document) => {
    return document.reduce((ids, { id }) => {
        ids.push(id);
        return ids;
      }, []);
};

const extractOptions = (options, docIndex) => {
    return options.map((opt, index) => {
        return options[docIndex];
    })
};

const setOptionsObj = (documents, options) => {
    return documents.map((doc, index) => {
        return objModifier.addAttr(doc, _.MOD_ENV.OPT, extractOptions(options, index));
    })
};

const removeAttrs = (options) => {
    return options.map((opt, index) => {
            return objModifier.removeMultiAttr(opt, _.DOCS_REMOVE_ATTR); 
    });
};