#!/usr/bin/env bash
nohup node ./node_modules/sonos-http-api/server.js >> output.log 2>&1 &
echo $! >> app.pid
echo "Started SonosAPI on port 5005 [PID $!]"

