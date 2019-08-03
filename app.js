const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
let bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

let apiRoutes = require("./config/api-routes");

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});



//add the router
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.

app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

// Use Api routes in the App
app.use('/api', require('./middleware/base'));
app.use('/api', apiRoutes);
// app.use('/admin', router);
app.listen(process.env.port || 3001);

console.log('Running at Port 3001');




