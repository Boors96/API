// 
// const authConthroller = require('./../controllers/controller.auth');
//
// /**
//  * require compose model
//  * @type {Model}
//  */
// const compose = require('./../../../common/common.func/func.compose');
//
// exports.startSession = (req, res) => {
//   return compose.compose(
//     authConthroller.verifyAccount,
//     // authConthroller.createJWT
//   )(req, res).then((response) => {
//       login("kkkkkkkkkkkkkkkkkk " + JSON.stringify(response));
//     });
// };
//
//
// const removeSensetiveData = (user) => {
//   return objModifier.removeAttr(objModifier.removeAttr(user,
//     _.PASS), _.EMAIL);
// };
