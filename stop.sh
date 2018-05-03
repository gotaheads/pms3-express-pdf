#!/bin/bash
source ../pms3-commons.sh
init-nvm

echo "pm2 stop"
pm2 stop $SCRIPT
