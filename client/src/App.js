// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [interval, setInterval] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/reminder', {
                interval,
                startTime,
                endTime,
                phoneNumber,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error setting reminder:', error);
            alert('Failed to set reminder');
        }
    };

    return (
        <div>
            <h1>Water Reminder App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Interval (in minutes)"
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Start Time (24hr)"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="End Time (24hr)"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Your WhatsApp Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type="submit">Set Reminder</button>
            </form>
        </div>
    );
}

export default App;
