const express = require('express');
const path = require('path');
const __app = express();

__app.set('port', process.env.PORT || 4200);

// Middlewares

__app.set('views', path.join(__dirname, 'views'));
__app.set('view engine', 'ejs');

// Routes

__app.use(require('./routes/index'));

// Static files

__app.listen(__app.get('port'), () => {
    console.log('Listening on port ' + __app.get('port'));
});