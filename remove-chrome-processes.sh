#!/bin/bash
source ../pms3-commons.sh
init-nvm
echo "remove chrome processes"
node remove-chrome-processes.js
