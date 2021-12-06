const https = require("https");

const querystring = require("querystring");

const _ = require('../../common/common.env/env');

exports.orderPayment = (order, response) => {
	
const params = {
    ivp_method: _.PAYMENT.METH_CREATE,
    ivp_store: _.PAYMENT.STOR_NUM,
    ivp_authkey: _.PAYMENT.AUTH_KEY,
    ivp_amount: order.amount,
    ivp_currency: _.PAYMENT.CURR,
    ivp_test: _.PAYMENT.TEST,
    ivp_cart: order.id,
    ivp_desc: _.PAYMENT.ORD_PAY_DESC,
    return_auth: _.PAYMENT.AUTH_TRANC,
    return_decl: _.PAYMENT.DEC_TRANC,
    return_can: _.PAYMENT.CANC_TRANC
  };

  const options = {
    host: 'secure.telr.com',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    path: '/gateway/order.json',
    method: 'POST',
  };
    

    const req = https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          response.send(chunk);
          console.log('BODY: ' + chunk);
        });
      });
      
      req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
      });
      
      req.write(querystring.stringify(params));
      req.end();
};

exports.getPaymentDetails = (payment, response) => {
  const params = {
    ivp_method: _.PAYMENT.METH_CHECK,
    ivp_store: _.PAYMENT.STOR_NUM,
    ivp_authkey: _.PAYMENT.AUTH_KEY,
    order_ref: payment.ref
  };

  const options = {
    host: 'secure.telr.com',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    path: '/gateway/order.json',
    method: 'POST',
  };
    

    const req = https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          response.send(chunk);
          console.log('BODY: ' + chunk);
        });
      });
      
      req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
      });
      
      req.write(querystring.stringify(params));
      req.end();
};