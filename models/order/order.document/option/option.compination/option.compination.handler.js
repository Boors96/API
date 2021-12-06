
const OptionCompination = require('./option.compination.model');

const Option = require('../option.model');

exports.createCompination = (compination) => {
    return OptionCompination.create(
        compination
    ).then((compinationResult) => {
        return compinationResult;
    }).catch((err) => {
        return err
    });
};

exports.findCompination = () => {
    return OptionCompination.findAll().then((compinationResult) => {
        return compinationResult;
    }).catch((err) => {
        return err;
    });
};

exports.findCompinationById = (compinationId) => {
    return OptionCompination.findAll({
        where: {id: compinationId},
        include: [{model: Option}]
    }).then((compinationResult) => {
        return compinationResult;
    }).catch((err) => {
        return err;
    });
};