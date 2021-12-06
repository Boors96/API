
const _ = require('../common.env/env');

const objModifier = require('../../obj/obj.modify');

exports.compose = (...func) => args => func.reduce((arg, fn) => Promise.resolve(arg).then(fn), args);

exports.regCompose = (...func) => args => func.reduce((arg, fn) => fn(arg), args);

// exports.curry = (func) => {
//   return curried = (...args) => {
//     return args.length >= func.length ? func.apply(this, args) : ((...args2) => {
//       return curried.apply(this, args.concat(args2))
//     });
//   };
// };

// exports.promiseMap = (obj, func) => {
//   return Promise.all(
//     obj.map(func)
// );
// };

exports.promiseMap = (obj, func) => {
  return Promise.all(
    obj.map(func)
  );
};


exports.generateNumb = (rowId, companyId, numType) => {
  return numType.concat(_.SAMPLS.SCOR, _.NUMS.ZERO, companyId, rowId);
};

exports.decrement = (fValue, sValue) => {
  return fValue >= sValue ? fValue - sValue : null;
};

exports.enrcrement = (fValue, sValue) => {
  return fValue + sValue;
};

const extractObject = (options, docIndex) => {
  return options.map((opt, index) => {
      return options[index];
  })
};

exports.mapObjectToArrayofObject = (documents, options) => {
  return documents.map((doc, index) => {
      return objModifier.addAttr(doc, _.MOD_ENV.OPT, extractObject(options, index));
  })
};