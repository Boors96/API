
const accountRouts = require('../../account/account.rout');
const authRouts = require('../../auth/auth.rout');
const orderRouts = require('../../order/order.rout');


exports.routsConfig = app => {
  accountRouts.accountRout(app);
  authRouts.authRout(app);
  orderRouts.orderRout(app);
};
