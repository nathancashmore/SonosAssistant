#!/usr/bin/env bash
if [ -f app.pid ]; then
    kill $(cat app.pid)
    echo "Stopped the processes for the PIDS..."
    cat app.pid
    rm app.pid
else
    echo "Cannot see anything running based on app.pid file"
fi
