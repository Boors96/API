/**
 * requer account controller model
 * @type {Model}
 */
const accountController = require('./controllers/controller.create');


exports.accountRout = app => {
  /**
   * url '/signup' to create new company account
   */
  // app.post('/signup', [
  //   accountController.signup
  // ]);

  /**
   * url '/create-account' to create new user account
   */
  app.post('/create-account', [
    accountController.createUser
  ]);

   /**
    * url '/create-address' to create new address
    *
    */
    app.post('/create-address', [
      accountController.addNewAddress
    ]);

     /**
    * url '/get-all-users' to get all users
    *
    */
      app.get('/get-all-users', [
        accountController.getAllUsers
      ]);

      /**
    * url '/get-user-by-id' to get user
    *
    */
       app.get('/get-user-by-id/:user_id', [
        accountController.getUserById
      ]);

      /**
    * url '/get-user-by-email' to get user
    *
    */
       app.get('/get-user-by-email/:user_email', [
        accountController.getUserByEmail
      ]);

      /**
      * url '/get-all-users' to get all users
      *
      */
       app.put('/set-user-status', [
        accountController.updateUserData
      ]);

      /**
      * url '/not-active-users' to get not active users
      *
      */
       app.get('/not-active-users', [
        accountController.getNotActiveUser
      ]);

      /**
      * url '/active-users' to get active users
      *
      */
       app.get('/active-users', [
        accountController.getActiveUser
      ]);

      /**
      * url '/suspended-users' to get suspended users
      *
      */
       app.get('/suspended-users', [
        accountController.getSuspendedUser
      ]);

      /**
      * url '/users-address' to get user address
      *
      */
       app.get('/user-addresses/:user_id', [
        accountController.getUserAddress
      ]);

      /**
      * url '/suspend-user' to suspend user
      *
      */
       app.put('/suspend-user', [
        accountController.suspendUser
      ]);

      /**
      * url '/activate-user' to activate user
      *
      */
       app.put('/activate-user', [
        accountController.activateUser
      ]);
  
};

