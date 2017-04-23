# SonosAssistant
Intermediate service to receive Google Home request and interpret to play tunes on your local Sonos.

Uses the fine work of jishi/node-sonos-http-api to talk to your local services. 

# Prerequisites
- Api.Ai account (https://console.api.ai/api-client) 
- Google Cloud Platform project (https://console.cloud.google.com/home/dashboard) 
- Firewall opened on port 3000 and a host to run it on.  

# Setup
## Sonos Assistant
- npm install

## Api.Ai
- Goto Api.Ai
- Create new agent

- Goto Settings > Export and Import
- Restore from zip
- Drop in the file SonosAssistant-ApiAi.zip at base of project.

- Goto Integrations > Actions on Google 
(Follow the steps to push out to google cloud) 

# Running
- npm start

Fires up: 
- node-sonos-http-api by default on port 5005
- Sonos-Assistant by default on port 3000

# Serving over https
- Download and install ngrok (https://ngrok.com/download)
- ngrok http 3000

Copy output https url and enter in Api.Ai as the Fulfillment Webhook URL with /sonos/ on the end.
e.g.
https://7e68c7b6.ngrok.io/sonos

# Logging
All output goes to the file output.log, tail that if nothing is working.

# Testing 
npm test




