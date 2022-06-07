
const express = require('express'); 
const app = express();
app.use(express.static("../../../frontend/"));

const hostname = '127.0.0.1';
const port = 3094;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'adm.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


/* Definição dos endpoints do sistema*/

// LOGIN

app.post('/logininsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "INSERT INTO login (email, senha) VALUES ('" + req.body.email + "', '" + req.body.senha + "')";
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
app.post('/logindelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM login WHERE IDlogin = '" + req.body.IDlogin + "'";
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
app.post('/loginupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "UPDATE login SET senha = '" + req.body.senha + "' WHERE IDlogin = '" + req.body.IDlogin + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.post('/loginselect', urlencodedParser, (req, res) => {

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = `SELECT senha FROM login where email = '${req.body.email}'`;
  console.log(sql);
  db.all(sql, [], (err,rows) => {
    if (err) {
      throw err;
    } 
    //res.json(rows);

    if(rows[0].senha == req.body.senha) res.json(true) 
    else res.json(false);

  });
  db.close();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});