
const Allowed = require('../option.compination/option.compination.model');
const DocumentOption = require('./document.options.model');

const Option = require('../option.model');

exports.createDocumentOptions = (docOption) => {
    return DocumentOption.bulkCreate(
        docOption,
    ).then((docOptionResult) => {
        return docOptionResult
    }).catch((err) =>{ return err });
};

exports.findDocumentOptionByDocId = (documentId, statusId) => {
    return DocumentOption.findAll({
        where: {document_id: documentId, status_id: statusId},
        include: [{model: Option}]
    }).then((documentOptionResult) => {
        return documentOptionResult;
    }).catch((err) => {
        return err;
    });
};