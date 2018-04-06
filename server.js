var path = require('path');
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

global.appRoot = path.resolve(__dirname);

app.use(express.json());
app.use(express.urlencoded());

app.post('/', function(req, res) {
    readDir(global.appRoot);
    var reply = "";
    //console.log(readDir(global.appRoot));
    reply = "Dirs and files: " + readDir(global.appRoot);
    res.send(reply);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/js/ui.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/ui.js'));
});

var dir = [];
function readDir(path) {
  return fs.readdirSync(path, function(err, items) {
      return items;
  });
}


var server = http.createServer(app);
server.listen(8080);
