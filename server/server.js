const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/vuelogin');

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token")
    next()
})
app.use(require('morgan')('dev'))
app.use(require('body-parser').urlencoded({
    extended: false
}));
app.use(require('body-parser').json());
app.use('/', require('./routes'))

// NOTE: run
app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'));
})