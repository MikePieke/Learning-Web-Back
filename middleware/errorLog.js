const {format} = require("date-fns");

const fileSystem = require('fs');
const fileSystemProm = require('fs').promises;
const path = require('path');

async function errorLog(message, fileName) {
  const date = format(new Date, "yyyy:MM:dd \t HH:mm");
  const logItem = `Date: ${date}\t Error: ${message}\n`;

  if (!fileSystem.existsSync(path.join(__dirname, '..' ,'logs'))) {
    await fileSystemProm.mkdir(path.join(__dirname, '..' ,'logs'));
  }

  try {
    await fileSystemProm.appendFile(path.join(__dirname, '..', 'logs', fileName), logItem);
  } catch(err) {
    console.error(err);
  }
}

function errorer(err,req,res,next) {
  errorLog(`Erorr Name: ${err.name},  ${err.message}`, 'errors.txt');
  // res.status(500).send(`${err.message}`);
}

module.exports = {errorLog, errorer};