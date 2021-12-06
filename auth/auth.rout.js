
const authController = require('./controllers/controller.auth');

const createToken = require('./middlewares/create-token');

const validateToken = require('./middlewares/validate-token');

exports.authRout = app => {
  /**
   * url '/verify' to verify user account
   */
  app.get('/verify/:id/:vcode' , [
    authController.verifyAccount,
  ]);
    /**
     * url '/login' to login user account
     */
    app.post('/login' , [
      authController.login,
    ]);

    /**
     * url '/testjwt' to test JWT validation
     */
    // app.post('/testjwt' , [
    //   validateToken.validateJWTToken,
    // ]);

};
