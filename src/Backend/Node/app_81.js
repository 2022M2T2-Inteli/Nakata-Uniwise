
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

// Retorna todos registros (Read)
app.get('/usersAssistidos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM UsuarioAssistidos ORDER BY title COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});











app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});