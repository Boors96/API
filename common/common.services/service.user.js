
const _ = require('../common.env/env');

const objModifier = require('../../obj/obj.modify.js');

exports.setUserId = (object, req) => {
    return objModifier.addAttr(object, _.MOD_ENV.USER_ID, req.headers.user_id);
};