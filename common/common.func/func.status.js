const _ = require('./../common.env/env');

exports.activeCompany = (status) => {
  return status === _.COMP_STATUS.ACT ? true : false;
}
