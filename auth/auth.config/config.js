
const _ = require('../../common/common.env/env');

module.exports = {
  EMAIL_CONFIG: {
    service: 'gmail',
      auth: {
        user: _.MAIL_USERNAME,
        pass: _.MAIL_PASSWORD,
      },
  },
  FROM_EMAIL: 'mohamdabd858@gmail.com',
  INVALID_COD_MSG: 'Invalid varification code',
}

// module.exports = {
//   EMAIL_CONFIG: {
//     service: 'gmail',
//     // host: 'smtp.gmail.com',
//     // port: 465,
//     // secure: true,
//       auth: {
//         // type: 'OAuth2',
//         user: _.MAIL_USERNAME,
//         pass: _.MAIL_PASSWORD,
//         // clientId: _.OAUTH_CLIENTID,
//         // clientSecret: _.OAUTH_CLIENT_SECRET,
//         // refreshToken: _.OAUTH_REFRESH_TOKEN,
//         // accessToken: _.OAUTH_ACCSESS_TOKEN
//       },
//     //   tls: {
//     //     secureProtocol: "TLSv1_method"
//     // }
//   },
//   FROM_EMAIL: 'mohamdabd858@gmail.com',
//   INVALID_COD_MSG: 'Invalid varification code',
// }
