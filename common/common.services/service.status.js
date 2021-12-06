/**
 * reqquer status handler model
 * @type {Model}
 */
const statusHandler = require('../../models/sub.model/sub.status/status.handler');

/**
 * reqquer object modifier model
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

/**
 * require services enviroment
 * @type {object}
 */
const _ = require('../../account/services/service.env');

exports.setStatus = (object) => {
    return statusHandler.createStatus(object.status).then((state) => {
      return objModifier.addRemoveAttr(object,
        _.ST,
        _.ST_ID,
        state.dataValues.id);
    }).catch((err) =>{ return err });
};

exports.getStatus = (object) => {
  return object.status_id ? statusHandler.findStatus(object.status_id).then((status) => {
    return objModifier.addRemoveAttr(object.dataValues ? object.dataValues : object, 
      _.ST_ID,
      _.ST,
      status);
  }).catch((err) =>{ return err }) : object;
};

exports.getStatusId = (status) => {
  return statusHandler.findStatusId(status).then((statusResult) => {
    return statusResult;
  }).catch((err) => {
    return err;
  });
}

// const inserStatus = (status) => {
//   return statusHandler.createStatus(status).then((state) => {
//     return state.dataValues.id;
//   }).catch(err => Error(err));
// };
