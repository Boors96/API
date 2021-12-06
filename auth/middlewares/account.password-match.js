onst getUser = require('./../../../models/user/user.get');
const hash = require('./../middlewares/create-hash');

exports.verifyUser = (req, res, next) => {
  const user = getUser.getByEmail(req.body.email);
  if(user){
    const dbPass = extractPassword(user);
    if(isMatch(dbPass[1], hashUserPass(req.body.password, dbPass[0]))){
      req.body = updateRequest(req.body);
      return next();
    }else{
      return res.status(400).send({errors: ['Invalid e-mail or password']});
    }
  }
};

const extractPassword = (object) => {
  return string.password.split('$');
}

const getUser = (email) => {
  const user = getUser.getByEmail(email) ;
  if(user.dataValues)
    return user.dataValues
  else
    return false;
};

const hashUserPass = (password, salt) => {
  return hash.dehashString(password, salt);
}

const isMatch = (dbPass, userPass) => {
  return dbPass === userPass;
}

const updateRequest = (userData, reqData) => {
  reqData.body = {
    id: userData.id,
    user_name: userData.user_name,
    email: userData.email,
    phone: userData.user_phone.phone_num,
    address: userData.user_address,
    user_roll: userData.user_roll,
    company: userData.company,
    status: userData.user_status
  }
}
