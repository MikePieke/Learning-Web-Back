const express = require('express');
const path = require('path');
const app = express();

const { logger, logEvents } = require('./middleware/logEvents');
const {errorer, errorLog} = require('./middleware/errorLog');

app.use(logger)

// serve static files (.css, .js, etc.)
app.use(express.static(path.join(__dirname, '/public')))
app.use('/subdir', express.static(path.join(__dirname, '/public')))

// routes
app.use('/subdir', require('./routes/subdir'));
app.use('/', require('./routes/root'));

app.listen(3500, () => {
    console.log('Listening on a port 3500...')
});


// Getting for all other URLs (In this case 404 erorr)
app.get('*', (req,res) => {
    res.statusCode = 404;
    res.sendFile(path.join(__dirname, 'views', '404.html'));
    errorLog(`Erorr Name: User couldn't find a path`, '404.txt');
})

app.use(errorer);