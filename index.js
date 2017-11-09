
var express = require('express');
var mysql = require('mysql');
var db = require('./db');
var bodyParser = require('body-parser');
var signup = require('./routes/signup');
var login = require('./routes/login');

//Running Port
const port = 8080;

let app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).json({
        'message': 'success'
    });

});

app.get('/', (req, res)=>{
    res.status(200).send('Server Online!')
})

app.post('/signup', signup);
app.post('/login', login);


app.listen(port, () => {
    console.log('Server running at localhost:'+port);
});