var path = require('path');
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
//app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.multipart());

app.post('/', function(req, res) {
  console.log(req.body);
  res.send(200);

  foo();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/js/ui.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/ui.js'));
});

var foo = function() {
  var path = '/etc/';
  fs.readdir(path, function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
};

var server = http.createServer(app);

server.listen(8080);
