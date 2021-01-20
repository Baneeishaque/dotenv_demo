// From https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html

console.log(process.env);
console.log('The value of process.env.PORT is:', process.env.PORT);

var PORT = process.env.PORT || 3000;
console.log('The value of Variable PORT is:', PORT);

process.env.PORT = 5000;
console.log('The value of process.env.PORT is:', process.env.PORT);

PORT = process.env.PORT || 3000;
console.log('The value of Variable PORT is:', PORT);

console.log('No value for FOO yet:', process.env.FOO);
require('dotenv').config();
console.log('Now the value for FOO is:', process.env.FOO);
