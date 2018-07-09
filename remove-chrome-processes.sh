#!/bin/bash
source ../pms3-commons.sh
init-nvm
echo "remove chrome processes $(date)"
node remove-chrome-processes.js
