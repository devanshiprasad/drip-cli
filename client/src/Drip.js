// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/logo.png';

function Drip() {
    const [interval, setInterval] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://43.204.31.197:3001/api/reminder', {
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
        <div className="form-container">
            <div className='form-items'>
            <img src={logo} id='drip-logo'/>
            </div>
       
        <form onSubmit={handleSubmit} className="flex">
            <div className='form-items' id='interval'> 
                <label>
                    Interval (in minutes): 
                    <input
                        type="number"
                        placeholder="Interval (in minutes)"
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className='form-items' id='start'>
                <label>
                    Start Time (24hr):
                    <input
                        type="number"
                        placeholder="Start Time (24hr)"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className='form-items' id='end'>
                <label>
                    End Time (24hr):
                    <input
                        type="number"
                        placeholder="End Time (24hr)"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className='form-items' id='number'>
                <label>
                    Your WhatsApp Number (prefix your country code without a "+" or space):
                    <input
                        type="text"
                        placeholder="Your WhatsApp Number (for eg: 91xxxxxxxxxx)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit" className='bn54' id='submit'>Set Reminder</button>
        </form>
    </div>
    );
}

export default Drip;
