# Drip💧: A water reminder application with CI/CD Pipeline
![Group 38 (1)](https://github.com/user-attachments/assets/aca63b9f-8389-49f8-8850-411b53026677)

# Project Overview💧
1. This project is a WhatsApp Reminder Application that lets users set up periodic reminders sent to their phone numbers via WhatsApp.
2. The application is built with Node.js and React, integrated with Twilio for messaging, and uses a Jenkins CI/CD pipeline for seamless deployment on AWS EC2. 
3. Docker containers ensure consistent performance across all environments.
4. Github webhook ensures seamless integration with Jenkins. 

https://github.com/user-attachments/assets/6af6a45c-68c4-484e-a3a0-3458c4e26547

# Features🔧
1. **Customizable Reminders:** Set interval, start time, and end time for reminders. 
2. **WhatsApp Notifications:** Receive reminders directly on your WhatsApp using Twilio.
3. **Rate Limiting:** Prevents excessive requests and helps avoid spam.
4. **CI/CD Pipeline:** Automated deployment with Jenkins, Docker, and Docker Compose.

# Project Structure💦
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

# Technology Stack🛠️ 
1. **Backend:** Node.js, Express.js, Twilio API
2. **Frontend:** React, Axios
3. **Containerization:** Docker, Docker Compose
4. **CI/CD:** Jenkins
5. **Deployment:** Hosted on AWS EC2

# Pipeline Flowchart💦
![drip](https://github.com/user-attachments/assets/489d5238-7b27-4cd0-a486-c787ea5ff039)

# Setting up the pipeline 

**1. EC2 Setup**🌊
-> Create EC2 Instance (I used Ubuntu) 
-> Install Java on your instance 
```
sudo apt install openjdk-17-jre
```
**2. Jenkins Setup**🌊
-> Install Jenkins 
```
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \   /usr/share/keyrings/jenkins-keyring.asc > /dev/null 
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \   https://pkg.jenkins.io/debian binary/ | sudo tee \   /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update 
sudo apt-get install jenkins
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

```
(Make sure to edit your inbound rules to include port 8080. This is the port where Jenkins runs).

-> Login to Jenkins 
-> Create a freestyle job in jenkins. Add the github repo's URL. Also, add the generated credentials. Make sure to add the same in github keys. 

**3. Docker Setup**🌊
-> Install Docker 
-> Make docker images in both client and server directory. 
-> Install Docker compose. 
-> Create a docker-compose.yml file. 

Start building the containers: 
```
docker-compose up -d
```
**4. Final Steps**🌊

-> Go to the jenkins job and click on execute shell. 
-> Add the docker commands in the shell. Save. 
-> Go on github and create a jenkins webhook in the repository.

# Troubleshooting🐛
**1. Not receiving WhatsApp messages:** Double-check your Twilio credentials in .env and ensure you’re using the correct phone number format.
**2. Docker Permission Issues:** If you encounter issues with Docker permissions, run:
```
sudo usermod -aG docker $USER
```
**3. Rate Limiting Error:** If you hit the rate limit, please wait and try again later.

# License📜
This project is licensed under the MIT License.

Enjoy staying hydrated! 💦












