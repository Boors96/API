
const UserRoll = require('./roll.model');

exports.insertRoll = (roll) => {
  return UserRoll.findOrCreate({
    where: { roll: roll },
    roll,
  }).then((rollRes) => {
    return rollRes[0];
  })
};

exports.getRoll = (rollId) => {
  UserRoll.findAll({
    where: {id: rollId}
  }).then((rollResult) => {
    return rollResult;
  }).catch((err) => {
    return err;
  });
}
