
const orderController = require('./order.controller/order.controller');

const fileConfig = require('../common/common.services/file.config');

const accountAuth = require('../auth/middlewares/validate-token');

exports.orderRout = app => {
    /**
   * url '/create-order' to create new order
   */
  app.post('/create-order', [
  //  accountAuth.validateJWTToken,
    fileConfig.uploade.single('document'),
    orderController.createOrder
  ]);

  /**
   * url '/set-order-address' to set order address
   */
   app.put('/set-order-address', [
    // accountAuth.validateJWTToken,
    orderController.updateOrder
  ]);

   /**
   * url '/create-option' to create new option
   */
    app.post('/create-option', [
      orderController.createOption
    ]);

    /**
   * url '/create-compination' to create new option compination
   */
     app.post('/create-compination', [
      orderController.createCompination
    ]);

     /**
   * url '/create-delivery' to create new delivery
   */
      app.post('/create-delivery', [
        orderController.createDelivery
      ]);

    /**
   * url '/get-options' to get all options
   */
     app.get('/get-options', [
      orderController.getOptionCompinations
    ]);

    /**
    * url '/upload-document' to create new document
    */
    //  app.post('/upload-document', [
    //   fileConfig.uploade.single('document'),
    //   orderController.setDocument
    // ]);

    /**
    * url '/set-options' to create new document option
    */
     app.post('/set-document-options', [
      orderController.setOption
    ]);

    /**
    * url '/get-all-uploads' to create new document option
    */
     app.get('/get-all-uploads', [
      orderController.getAllUploaded
    ]);

    /**
    * url '/get-all-payed' to get all payed
    */
     app.get('/get-all-payed/:status', [
      orderController.getOrderByStatus
    ]);
    
    /**
    * url '/get-all-deliverd' to get all deliverd
    */
     app.get('/get-all-deliverd/:status', [
      orderController.getOrderByStatus
    ]);

    /**
    * url '/get-all-printed' to get all printed
    */
     app.get('/get-all-printed/:status', [
      orderController.getOrderByStatus
    ]);

    /**
    * url '/get-all-user-orders' to get all user orders
    */
     app.get('/get-all-user-orders', [
      orderController.getAllUserOrders
    ]);

    /**
    * url '/get-order-documents' to get all user orders
    */
     app.get('/get-order-documents/:order_id', [
      orderController.getDocumentByOrder
    ]);

    /**
    * url '/set-order-printed' to update document status to printed
    */
     app.put('/print-document', [
      orderController.updateOrder
    ]);

    /**
    * url '/set-order-deleted' to update document status to deleted
    */
     app.put('/delete-document', [
      orderController.updateDocuments
    ]);

    /**
    * url '/deliver-order' to deliver order
    */
     app.put('/deliver-order', [
      orderController.updateOrder
    ]);

    /**
    * url '/pay-order' to pay order
    */
     app.put('/pay-order', [
      orderController.updateOrder
    ]);

    /**
    * url '/cancle-order' to cancle order
    */
     app.put('/cancle-order', [
      orderController.updateOrder
    ]);

    /**
    * url '/cancle-order' to cancle order
    */
     app.put('/set-delivery', [
      orderController.updateOrder
    ]);

    /**
    * url '/order-payment' to start payment
    */
     app.get('/order-payment/:id/:amount', [
      orderController.payOrder
    ]);

    /**
    * url '/get-order-payment' to get order invoice
    */
     app.get('/get-order-payment/:ref', [
      orderController.getOrderPayment
    ]);

};