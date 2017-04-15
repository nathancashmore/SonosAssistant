#!/usr/bin/env bash

cat /dev/null > output.log

nohup node ./bin/www >> output.log 2>&1 &
echo $! >>app.pid
echo "Started SonosAssistant on port 3000 [PID $!]"

nohup node ./node_modules/sonos-http-api/server.js >> output.log 2>&1 &
echo $! >>app.pid
echo "Started SonosAPI on port 5005 [PID $!]"

echo "Output for all processes can be found in output.log"