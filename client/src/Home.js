import React from 'react'
import logo from './images/logo.png'
import qr from './images/qr.png'
import { Link } from 'react-router-dom';
import './App.css';
export default function Home() {
  return (
    <div className="flex-container">
   <div className="flex-items" ><img src={logo} id='logo'/></div>
   <div className="flex-items" id="para"><p id='text'>Welcome to DRIP: an app that reminds you stay hydrated- <br/>
     by sending you reminders through <b>WhatsApp</b>.</p></div>
   <div className='flex-items'><img src={qr} id='qr'/></div>
   <div className='flex-items' id='qr-text'><p id='pqr-text'>Scan this QR code to add your whatsapp number to my Twilio sandbox!</p></div>
   <Link to='/Drip'>
   <button class="bn54">
    <span class="bn54span">let's go!</span>
  </button>
   </Link>
</div>
  )
}
