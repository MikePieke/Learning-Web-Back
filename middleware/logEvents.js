const fileSystem = require('fs');
const fileSystemProm = require('fs').promises;
const path = require('path');
const {format} = require('date-fns');

async function logEvents(message,fileName) {
    const date = format(new Date(), 'yyyy:MM:dd \t HH:mm');
    const logItem = `Date: ${date}\t Message: ${message}\n`;

    if (!fileSystem.existsSync(path.join(__dirname, '..' ,'logs'))) {
        await fileSystemProm.mkdir(path.join(__dirname, '..' ,'logs',));
    }

    try {
        await fileSystemProm.appendFile(path.join(__dirname,'..' ,'logs', fileName), logItem);
    } catch (error) {
        console.error(`Erorr: ${error}`);
    }
};

function logger(req,res,next) {
    logEvents(`${req.method} ${req.url}`, 'logs.txt')
    next();
}

module.exports = {logger, logEvents};