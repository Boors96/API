const hash = require('./create-hash');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../common/common.env/env').JWT_SECRET;

const _ = require('../../common/common.env/env').MOD_ENV;

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');



exports.setJWTToken = (user) => {

  user.response = removeSensetiveData(user.response);
  const hash = createHash(user.response.id);
  addRefreshKey(user.request, hash.salt);
  return {tokens: {accsses_token: createToken(user.request),
          refresh_token: createRefreshToken(createBuffer(hash.hash))},
          response: user.response};
};

// exports.validateJWTToken = (req, res, next) => {
//   try{
//     return jwtCheckHandler(req) ? res.status(200).send() : res.status(401).send();
//   }catch(err) {
//     return res.status(403).send();
//   }
// };

const createBuffer = (hash) => {
  return Buffer.from(hash);
};

const createRefreshToken = (buff) => {
  return buff.toString('base64');
};

const createHash = (userId) => {
  return hash.stringHash(userId+jwtSecret);
};

const addRefreshKey = (req, key) => {
  return req.refresh_key = key;
};

const createToken = (req) => {
  return jwt.sign(req, jwtSecret);
};

const removeSensetiveData = (user) => {
   return objModifier.removeAttr(
     objModifier.removeAttr(
       objModifier.removeAttr(
         user,
         _.V_CODE),
    _.PASS), _.EMAIL);

};


//
// const checkHeader = (req) => {
//   return req.body.headers.authorization ;
// };
//
// const checkApplicent = (auth) => {
//   return auth[0] === 'applicent' ;
// };
//
// const verifyJWT = (req, auth) => {
//   return req.jwt = jwt.verify(auth[1], jwtSecret);
// };
//
// const checkJWTAttributes = (req) => {
//   return checkHeader(req) ?
//   checkApplicent(
//     objModifier.splitString(
//       req.body.headers.authorization, " "
//     )) : false;
// };
//
// const jwtCheckHandler = (req) => {
//   return checkJWTAttributes(req) ? verifyJWT(req,
//   objModifier.splitString(req.body.headers.authorization, " ")) : false;
// };
