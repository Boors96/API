const emailConfig = require('../auth.config/config');
const nodemailer = require('nodemailer-promise');

exports.email = (to, subject, body) => {
  return nodemailer.config(emailConfig.EMAIL_CONFIG)(emailOptions(to, subject, body)).then((info) => {
    return info;
  }).catch((err) => {
    return err;
  });
};

const emailOptions = (to, subject, body) => {
  return {
    from: emailConfig.FROM_EMAIL,
    to: to,
    subject: subject,
    text: body
  }
};
