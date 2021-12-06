
const getUser = require('../../models/user/user.get');


exports.checkUser = (account) => {
  return getUser.getIDByEmail(account.email).then((user, reject) => {
    return user ? true : false ;
  }).catch((err) =>{ return err });
};