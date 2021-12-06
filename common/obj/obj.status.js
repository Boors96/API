/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('./../../obj/obj.modifier/obj.modifier.js');

exports.addStatusId = (obj, statusId) => {
  return removeStatus(
      objModifier.setAttrebute(
        obj,
        'status_id',
        statusId
      ),
    );
};

const removeStatus = (obj) => {
  const {
    status,
    ...newcompanyData
  } = obj;
  return newcompanyData;
}

exports.statusObj = (status) => {
  return {status_name: status};
}
