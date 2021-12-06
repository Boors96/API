
const Status = require('./model.status');

exports.createStatus = (status) =>  {
  return Status.findOrCreate({
    where: { status: status },
    status,
  })
  .then((state) => {
    return state[0];
  }).catch((err) =>{ return err });
};

exports.findStatus = (status_id) => {
  return Status.findOne({
    where: {id: status_id},
    attributes: ['status']
  }).then((statusResult) => {
    return statusResult.dataValues.status;
  }).catch((err) =>{ return err });
};

exports.findStatusId = (status) => {
  return Status.findOne({
    where: {status: status},
    attributes: ['id']
  }).then((statusResult) => {
    return statusResult;
  }).catch((err) => {
    return err;
  });
};
