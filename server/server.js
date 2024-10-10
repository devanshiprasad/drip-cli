const express = require('express');
const cron = require('node-cron');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit'); // Import rate limiter
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const accountSid = ACeb1cdcbbf01f15e39f1e012f2afc224f;
const authToken = '5b5507c069a7f5820911cae5ec4eaf8e';
const client = twilio(accountSid, authToken);

// Middleware
app.use(cors()); 
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
                from: 'whatsapp:+14155238886',
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
