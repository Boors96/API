
const monthlyReportHandler = require('../../models/monthly.report/monthly.report.handler');

const ordersHandler = require('../../models/order/order.get');

const objModifier = require('../../obj/obj.modify');

const _ = require('../../common/common.env/env');

const { compose } = require('../../common/common.func/func.compose');

exports.createReport = (month) => {
  return ordersHandler.findOrderByMonth(month).then((orderResult) => {
    
  }).catch((err) => {
    return err;
  });
};

const countOrders = (orders) => {
  return orders.reduce((accumulator, current) => {
    return  accumulator + current.total_price;
  }, 0);
};

const countCunceled = (ordrs) => {
  
};

const countDelivery = (orders) => {

};

const countNetVatOrders = (orders) => {

};

const attributeCounter = (orders, attribute) => {
  orders.reduce((accumulator, current) => {
    accumulator + current[attribute]
  }, 0);
};