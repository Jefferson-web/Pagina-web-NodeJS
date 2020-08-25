const express = require('express');
const __app = express.Router();

__app.get('/', (req, res) => {
    res.render('index', { title: 'First web site' })
});

__app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

__app.get('/sign-in', (req, res) => {
    res.render('sign-in', { title: 'Sign in' });
});

module.exports = __app;