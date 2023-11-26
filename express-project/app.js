var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', function(req, res){
   res.sendFile(__dirname+'/index.html');
 });
 app.post('/', function(req, res){
    console.log(req.body);
    res.send("Received your data!!");
 });
 app.listen(5000,()=>{
   console.log(`Server is running on http://localhost:5000`)
})