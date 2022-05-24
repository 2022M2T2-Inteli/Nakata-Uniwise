
const express = require('express'); 
const app = express();
app.use(express.static("../../../frontend/"));

const hostname = '127.0.0.1';
const port = 3081;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'revirar.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


/* Definição dos endpoints do sistema*/

// CRUD - BANCO DE DADOS REVIRAR

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Toalha (numeroToalha) VALUES ( 32)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Toalha WHERE IDToalha = 1";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Toalha SET numeroToalha = '35' WHERE IDToalha = '1'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});
















// Retorna todos registros (Read)
app.get('/usersassistidos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Toalha WHERE IDToalha = 1';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});






// CÓDIGO PARA PEGAR A TABELA INTEIRA, NÃO FUNCIONA



app.get('/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM Toalha ORDER BY title COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});




app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});