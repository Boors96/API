const hash = require('./create-hash');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../common/common.env/env').JWT_SECRET;

const _ = require('../../common/common.env/env').MOD_ENV;

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

exports.validateJWTToken = (req, res, next) => {
  try{
    return jwtCheckHandler(req) ? next() : res.status(401).send();
  }catch(err) {
    return res.status(403).send();
  }
};

const jwtCheckHandler = (req) => {
  return checkJWTAttributes(req) ? verifyJWT(req,
  objModifier.splitString(req.headers.authorization, " ")) : false;
};

const checkJWTAttributes = (req) => {
  return checkHeader(req) ?
  checkApplicent(
    objModifier.splitString(
      req.headers.authorization, " "
    )) : false;
};

const verifyJWT = (req, auth) => {
  return req.jwt = jwt.verify(auth[1], jwtSecret);
};

const checkApplicent = (auth) => {
  return auth[0] === 'user' ;
};

const checkHeader = (req) => {
  return req.headers.authorization ;
};
