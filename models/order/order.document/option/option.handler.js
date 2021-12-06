
const Option = require('./option.model');

const Status = require('../../../sub.model/sub.status/model.status');

exports.insetOption = (options) => {
    return Option.findOrCreate({where: {option_name: options.option_name, type_name: options.type_name},
        options,
    }).then((optionResult) => {
        return optionResult
    }).catch((err) =>{ return err });
};

exports.findByName = (optionName) => {
    return Option.findOne({
        where : {option_name: optionName}
    }).then((optionResult) => {
        return optionResult;
    }).catch((err) =>{ return err });
};

exports.findAllOptions = () => {
    return Option.findAll({
        include: [{model: Status, as: 'status'}],
    }).then((optionResult) => {
        return optionResult;
    }).catch((err) => {
        return err;
    });
};

exports.findOptionById = (optionId) => {
    return Option.findAll({
        where: {id: optionId}
    }).then((optionResult) => {
        return optionResult;
    }).catch((err) => {
        return err;
    });
};

exports.updateOption = (option) => {
    return Option.update(
        option, 
        { where: { id: option.id },
    }).then((optionResult) => {
        return optionResult;
    }).catch((err) => {
        return err;
    });
};