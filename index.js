var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.sendFile("admin/index.html");
});

app.listen(3000);