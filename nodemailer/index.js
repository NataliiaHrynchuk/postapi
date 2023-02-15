require('dotenv').config();
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = process.env;

async function main() {
  try {
    const email = {
      from: 'natagrinchukk@gmail.com',
      to: 'natagrinchuk@3g.ua',
      subject: 'Sendgrid Test 1',
      html: '<h1>Hello there!</h1>',
      text: 'Hello there text!',
    };
    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
    const response = await transport.sendMail(email);
    console.log(response);
  } catch (error) {
    console.error('app error:', error);
  }
}
main();
