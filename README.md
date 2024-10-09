# Drip-CLI: A Water-Reminder App
![Group 38](https://github.com/user-attachments/assets/fd1f63af-2ba0-4900-ada3-816745e38c4d)

# Description 
- Drip-CLI is a simple NodeJS application that reminds the users to stay hydrated at regular intervals (set by the user).
- The application is containerized by Docker.
- Twilio API handles sending notifications through Whatsapp.

# How to use Drip-CLI

# 1. Set Up Environment Variables
 Create a .env file in the root directory of your project with the following variables:
```
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
MY_PHONE_NUMBER=your_phone_number
```
# 2. Build Docker Image 

```
docker build -t drip-cli .
```
# 3. Run container 
```
docker run -it --rm \
  --name drip \
  --env-file .env \
  drip-cli
```
# 4. Stop container 
```
docker stop drip
```

# Usage without Docker 
Run the following command in your command line after installing node dependencies: 
```
node index.js
```


