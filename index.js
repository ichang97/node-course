//import module (normal)
const utils = require('./utils');

//destructuring (import module without declared variable)
const {sayHello, calculateVat} = require('./utils');

//use module
utils.sayHello();

const vat7 = utils.calculateVat(100,7);
console.log(vat7);

console.log('\nDestructuring...');
sayHello();
console.log(calculateVat(100,7));

//built-in modules

//path - (path)
const path = require('path');

//basename - filename
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//extension name
console.log(path.extname(__filename));

//return object in the file
console.log(path.parse(__filename));

//join multiple path
console.log(path.join(__dirname, 'utils.js'));


//file system - (fs)
const fs = require('fs');

//write file sync - syncronous - write file immediately for write tiny file.
//fs.writeFileSync(path.join(__dirname, 'data.txt'), "Hello");

//write file - asyncronous - write file and terminate some process before - use for huge file
// fs.writeFile(path.join(__dirname, "data.txt"), "hello", ()=>{
//     console.log('finish writing file. :)');
// });

//read file sync
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'))); //output buffer
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8')); //output content decoding utf8


//operating system - os
const os = require('os');

//show all cpus in my computer
console.log(os.cpus());

//show home directory in my computer
console.log(os.homedir());

//show how long my computer is turned on in second.
console.log(os.uptime());


//events
const events = require('events');
const eventEmitter = events.EventEmitter;

//new object for event
const connect = new eventEmitter;

//create event
connect.on('online', () =>{
    console.log('New user has connected.');
});

//run event
connect.emit('online');


