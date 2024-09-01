const cron = require('node-cron');
const twilio = require('twilio');
const readline = require('readline');
require('dotenv').config(); 


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the reminder interval in hours: ', (interval) => {
  rl.question('Enter the start time (24hr format, e.g., 08 for 8 AM): ', (startTime) => {
    rl.question('Enter the end time (24hr format, e.g., 20 for 8 PM): ', (endTime) => {
      const cronExpression = `0 ${startTime}-${endTime}/${interval} * * *`;
      
      cron.schedule(cronExpression, () => {
        console.log('Reminder: Take a break and drink water!');

        client.messages
          .create({
            body: 'Reminder: Take a break and drink water!',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_PHONE_NUMBER
          })
          .then(message => console.log(`Reminder sent: ${message.sid}`))
          .catch(err => console.error(err));
      });

      console.log('Reminder service started.');
      rl.close();
    });
  });
});
