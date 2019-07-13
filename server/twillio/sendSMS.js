// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACa987f9c49c16b0c7736d05be04560068';
const authToken = '88f5b715c4babc9b69a6997319804dd2';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13478756888',
     to: '+13475612927'
   })
  .then(message => console.log(message.sid));