require('dotenv').config();
const { app } = require('./app');
const sendGrid = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running ${PORT}!`);
// });

async function main() {
  try {
    sendGrid.setApiKey(SENDGRID_API_KEY);
    const email = {
      from: 'natagrinchukk@gmail.com',
      to: 'natagrinchuk@3g.ua',
      subject: 'Sendgrid Test',
      html: '<h1>Hello there!</h1>',
      text: 'Hello there!',
    };

    const response = await sendGrid.send(email);
    console.log(response);
  } catch (error) {
    console.error('App error:', error);
  }
}

main();
