/**
 * require hash model
 * @type {Model}
 */
const hash = require('../../auth/middlewares/create-hash');

/**
 * reqquer object modifier to modify objects
 * @type {Model}
 */
const objModifier = require('../../obj/obj.modify.js');

const _ = require('./service.env');
exports.setHash = (account) => {
  return objModifier.addAttr(account, _.PASS, hash.stringHash(account.password).hash);
}
