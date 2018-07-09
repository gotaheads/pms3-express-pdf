const shell = require('shelljs');
const R = require('ramda');
const {equals} = R;
const output = shell.exec('ps -eo pid,etime,comm |grep chrome', {silent: true}).stdout;
const lines = output.split('chrome');
console.log('lines: %j', output, lines);
const processesToKill = lines
  .filter(line => {
    return equals((line.trim().match(/\S+/g) || []).length, 2);
  })
  .map(line => {
    const parts = line.trim().match(/\S+/g) || [];
    //console.log('parts: %j', parts);
    return {id: +parts[0].trim(), time: +parts[1].trim().replace(/:/, '')};
  })
  .filter(process => process.time > 1000);

console.log('processesToKill: %j', processesToKill);

processesToKill.forEach(proc => {
  const output = shell.exec(`kill -15  ${proc.id}`).stdout;
  //console.log('killing the prcess: %j, output: %j', proc, output);
})


