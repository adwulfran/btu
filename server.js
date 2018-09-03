var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/static/node_modules/web3/dist/web3.min.js', express.static(__dirname + '/node_modules/web3/dist/web3.min.js'));
app.use('/script', express.static(__dirname + '/public/script.js'));

app.listen(3000, function(){
    console.log("The frontend server is running on port 3000!");
});