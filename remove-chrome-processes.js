var shell = require('shelljs');
var output = exec('ps -eo pid,etime,comm |grep chrome', {silent:true}).stdout;

