console.log("caiu aqq")
var express = require('express');//vrati funkciju
var app = express(); //vrati objekt
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/comments.db');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended : false}));

app.get('/comments', function(request, response){

console.log('GET zahtjevprimljen na : /comments');

//cita podatke iz baze podataka i salje kao response

db.all('SELECT * FROM comments', function(err, rows) {

if (err){

console.log(err);

}

else{

response.send(rows);

}

});

});

// Use jquery to access the comments table in comments database in folder db

getComments();

function getComments(){

$.get('/comments', function(data){

if(!data){

console.log("Data not received");

}

console.log("Received data:");

// Here you read the values for the columns table

for(var i = 0; i < data.length; i++){

console.log(data[i].name);

}

});

}