var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "",
    database : "user_data",
    port : 3306
});

db.connect();

app.use(bodyParser());

app.use(express.static('public'))

app.get('/',function(req, res){
  res.sendFile(__dirname+'/login.html');
});
app.post('/menus',function(req, res){
    var username = req.body.usr, password = req.body.pwd;
    
    db.query("INSERT into `users`(`username`, `password`) VALUES ('"+username+"','"+password+"');");
    res.sendFile(__dirname+'/menus/menus.html');
});
app.post('/drawing',function(req, res){
    res.sendFile(__dirname+'/drawing/drawing.html');
});
app.post('/credits', function(req, res){
    res.sendFile(__dirname+'/credits/credits.html');
});
app.listen(3000);