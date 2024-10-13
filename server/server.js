const express = require('express');
const cron = require('node-cron');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit'); // Import rate limiter
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Middleware
app.use(cors(({ origin: 'http://43.204.31.197:3000' }))); 
app.use(bodyParser.json()); 

// Rate Limiter Middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, 
    message: 'Too many requests from this IP, please come back later!'
});

app.post('/api/reminder', limiter, (req, res) => {
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
    console.log(`Server is running on http://43.204.31.197:${port}`);
});
