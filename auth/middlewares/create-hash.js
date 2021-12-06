const crypto = require('crypto');
const _ = require('../../common/common.env/env');

exports.stringHash = (string) => {
  const salt = crypto.randomBytes(_.HASH_BYTES).toString('base64');
  return {hash: crypto.createHmac('sha512',salt)
  .update(string)
  .digest("base64")
  .concat("$", salt),
  salt: salt};
};

exports.dehashString = (string, salt) => {
  return crypto.createHmac('sha512',salt)
  .update(string)
  .digest("base64");
};


const salt = () => {
  return crypto.randomBytes(_.HASH_BYTES).toString('base64');
};
