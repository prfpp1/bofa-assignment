var express = require('express');
var bodyParser = require('body-parser')

var expressServer = express();

expressServer.use(express.static(__dirname+'/'));
expressServer.use(bodyParser.json());

expressServer.get('/index', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

expressServer.listen(8082, function(err){
    if(err){
        throw err;
    }
    console.log("Bofa Assignment WebApp Started on 8082.");
});
