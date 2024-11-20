const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..' , 'views', 'index.html'));
}) 

router.get('/contact(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..' , 'views', 'contact.html'));
})

// Make a redirection
router.get('/new-page(.hmtl)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..' ,'views', 'new-page.html'));
})

router.get('/old-page(.html)?', (req,res) => {
    res.redirect(301,'/new-page');
})

module.exports = router;