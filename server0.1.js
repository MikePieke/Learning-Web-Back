const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => {
  console.log('Listening on a port 3500')
})

app.get('^/$|/index(.html)?', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// app.get('/index(.html)?', (req, res) => {

//   console.log(req.url)
//   console.log(req.url)

//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// })



// server.listen(PORT, () => {
//   console.log(`Server listening on a port ${PORT}...`)
// }) 

/* 

Native Node Js with HTTP Module

const fs = require('fs');
const fileSystem = require('fs').promises;
const http = require('http');
const path = require('path');

const logs = require('./logEvents');
const { EventEmitter } = require('events');
const logEvents = require('./logEvents');
const Emitter = new EventEmitter();

Emitter.on('log', (msg,fileName) => logEvents(msg, fileName));

const displayData = async (filePath, ContentType, response) => {
  try {
    const data = await fileSystem.readFile(filePath, 'utf-8');
    response.writeHead(200,{"Content-Type" : ContentType});
    response.end(data);
  } catch(err) {
    response.writeHead(500,{"Content-Type" : 'text/plain'});
    response.end("Initial Sever Error");

    Emitter.emit('log', `URL: ${err.name} METHOD: ${err.message}`, 'errors.txt');
    console.log(err);
  }
}

const server = http.createServer((req,res) => {
  Emitter.emit('log', `URL: ${req.url} METHOD: ${req.method}`, 'logs.txt');

  let extention = path.extname(req.url);
  let contentType;

  switch(extention) {
    case '.txt' :
      contentType = 'text/plain';
      break;
    case '.css' :
      contentType = 'text/css';
      break;
    case '.js' :
      contentType = 'text/javascript';
      break;
    case '.jpeg' :
      contentType = 'image/jpeg';
      break;
    case '.png' :
      contentType = 'image/png';
      break;
    case '.json' :
      contentType = 'application/json';
      break;
    default :
      contentType = 'text/html';
  }

  let filePath = contentType === 'text/html' && req.url === '/' 
    ? path.join(__dirname, 'views', 'index.html') : 
      contentType === 'text/html' && req.url.slice(-1) === '/' ? 
        path.join(__dirname, 'views', req.url, 'index.html') : contentType === 'text/html' 
        ? path.join(__dirname, 'views', req.url)
        : path.join(__dirname, req.url);
  //

  if (!extention && req.url.slice(-1) !== '/') {
    filePath += '.html'; 
  }


  console.log(filePath)

  let fileExists = fs.existsSync(filePath);

  if (fileExists) {
    displayData(filePath,contentType,res);
  } else {
    displayData(path.join(__dirname, 'views', '404.html'), contentType, res);
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on a port ${PORT}...`)
}) 
  

*/