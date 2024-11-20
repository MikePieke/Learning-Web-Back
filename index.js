/* NPM Modules */

// const { format } = require('date-fns');
// let date = format(new Date(), 'yyyy MM d');
// console.log(date)

console.log("You are pretty nice");
console.log("You are pretty nice");


// UUID

// const { v4:uuid} = require('uuid');

// console.log(uuid());




/* Event Emitter */


const { format } = require('date-fns')
const { v4:uuid} = require('uuid');

const fileSystem = require('fs');
const fileSystemProm = require('fs').promises;
const path = require('path');


const logEvents = require('./logEvents');
const { EventEmitter } = require('events');

const Emitter = new EventEmitter();

Emitter.on('log', (msg) => logEvents(msg));

Emitter.emit('log', 'Now it is working');
// Emitter.removeAllListeners('log'); // Will Remove all Listeners for the 'log' argument 
Emitter.off('log', logEvents) // Derigister 'log' event for the logEvents