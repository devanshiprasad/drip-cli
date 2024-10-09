
const express = require('express');
const cron = require('node-cron');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// API endpoint
app.post('/api/reminder', (req, res) => {
    const { interval, startTime, endTime, phoneNumber } = req.body;

   
    const cronExpression = `* ${startTime}-${endTime}/${interval} * * *`;

   
    cron.schedule(cronExpression, () => {
        console.log('Cron job triggered for reminder.');

        client.messages
            .create({
                body: 'Reminder: Take a break and drink water!',
                from: process.env.TWILIO_PHONE_NUMBER,
                to: `whatsapp:${phoneNumber}`,
            })
            .then(message => console.log(`Reminder sent: ${message.sid}`))
            .catch(err => console.error('Error sending message:', err));
    });

    res.json({ message: 'Reminder service started.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
