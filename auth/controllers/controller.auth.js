
const verify = require('../auth.services/service.verify');

const validate = require('../auth.services/service.validate');

const jwt = require('../middlewares/create-token');

const _ = require('../../common/common.env/env');

const session = require('../auth.services/service.session');

exports.verifyAccount = (req, res) => {
    verify.verifyCode(req, res).then((response) => {
      !response.error ? res.status(200).send(JSON.stringify(response)) : res.status(401).send(JSON.stringify(response));
    }).catch(err => console.log("Error: " + err));
};

exports.login = (req, res) => {
  return validate.validatePassword(req.body).then((user) => {
     !user.error ? res.status(201).send(setResponse(createToken(user))) : res.status(401).send(user);
  });
};

const createToken = (user) => {
  return jwt.setJWTToken(user);
}

const setResponse = (object) => {
  return {
    accses_token: object.tokens.accsses_token,
    refresh_token: object.tokens.refresh_token,
    user_name: object.response.name,
    user_id: object.response.id,
    user_roll: object.response.user_roll.roll,
    status: object.response.status.status
  };
};
