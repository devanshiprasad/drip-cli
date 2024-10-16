# Drip💧: A water reminder application with CI/CD Pipeline
![Group 38 (1)](https://github.com/user-attachments/assets/aca63b9f-8389-49f8-8850-411b53026677)

# Project Overview💧
-> This project is a WhatsApp Reminder Application that lets users set up periodic reminders sent to their phone numbers via WhatsApp.
-> The application is built with Node.js and React, integrated with Twilio for messaging, and uses a Jenkins CI/CD pipeline for seamless deployment on AWS EC2. 
-> Docker containers ensure consistent performance across all environments.

https://github.com/user-attachments/assets/6af6a45c-68c4-484e-a3a0-3458c4e26547

# Project Structure 
````
Drip-Reminder-App/
│
├── client/             # Frontend React application
│   └── src/
│       └── App.js
│       └── Dockerfile  # Dockerfile for the client
|       └── ...
│
├── server/             # Backend Express application
│   └── server.js
│   └── Dockerfile      # Dockerfile for the server 
│   └── .env            # Environment variables (not in repo)
│
├── docker-compose.yml  # Docker Compose file 
│
│
└── README.md           # Project documentation 

`````

# Features🔧
-> **Customizable Reminders:** Set interval, start time, and end time for reminders.
-> **WhatsApp Notifications:** Receive reminders directly on your WhatsApp using Twilio.
-> **Rate Limiting:** Prevents excessive requests and helps avoid spam.
-> **CI/CD Pipeline:** Automated deployment with Jenkins, Docker, and Docker Compose.

# Technology Stack🛠️ 
-> **Backend:** Node.js, Express.js, Twilio API
-> **Frontend:** React, Axios
-> **Containerization:** Docker, Docker Compose
-> **CI/CD:** Jenkins
-> **Deployment:** Hosted on AWS EC2








