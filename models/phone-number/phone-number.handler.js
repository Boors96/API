
const Phone = require('./phone-number.model');

exports.createPhone = (phone) => {
  return Phone.create({
    phone
  }).then((phoneNum) => {
    return phoneNum;
  }).catch((err) =>{ return err });
};

exports.updatePhone = (phone) => {
  return Phone.update(
    {where: { id: phone.id }},
    phone
  ).then((ph) => {
      return ph;
  }).catch((err) =>{ return err });
};
