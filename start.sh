#!/bin/bash
source ../pms-commons.sh
init-nvm

SCRIPT=./dist/server.js
echo "pm2 start"
pm2 start $SCRIPT
