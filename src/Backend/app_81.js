
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


// USUÁRIO ASSISTIDOS CADASTRADOS

// Insere um registro (é o C do CRUD - Create)
app.post('/userassistidosinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO UsuarioAssistidos (IDFichaAbordagem, IDFichaCadastro, IDFichaFrequencia, IDFichaPIA, IDAtendimento, IDToalha) VALUES (  '" + req.body.IDFichaAbordagem + "','" + req.body.IDFichaCadastro + "','" + req.body.IDFichaFrequencia + "','" + req.body.IDFichaPIA + "','" + req.body.IDAtendimento + "','" + req.body.IDToalha + "')";
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
app.post('/userassistidosdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM UsuarioAssistidos  WHERE IDAssistidos = '" + req.body.IDAssistidos + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/usersassistidos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM UsuarioAssistidos ORDER BY IDAssistidos COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});




// FICHA ABORDAGEM 

// Insere um registro (é o C do CRUD - Create)
app.post('/abordageminsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaAbordagem (nomeAbo,chamadoAbo, origemAbo, albergueAbo, qualAbergAbo,tempoRuaAbo, IDMotivoAbo, irProjetoAbo, quandoIrProjeAbo, obsAbo, eduAbo, dataAbo) VALUES ( '" + req.body.nomeAbo + "','" + req.body.chamadoAbo + "','" + req.body.origemAbo + "','" + req.body.albergueAbo + "','" + req.body.qualAbergAbo + "','" + req.body.tempoRuaAbo + "','" + req.body.IDMotivoAbo + "','" + req.body.irProjetoAbo + "','" + req.body.quandoIrProjeAbo + "','" + req.body.obsAbo + "','" + req.body.eduAbo + "','" + req.body.dataAbo + "')";
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
app.post('/abordagemdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaAbordagem  WHERE IDAssistidos = '" + req.body.IDAssistidos + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/abordagemusers', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaAbordagem ORDER BY IDAbordagem COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/abordagemupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaAbordagem SET nomeAbo = '" + req.body.nomeAbo + "' WHERE IDAbordagem = '" + req.body.IDAbordagem + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// FICHA CADASTRO

// Insere um registro (é o C do CRUD - Create)
app.post('/cadastroinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaCadastro (nomeCad,chamadoCad, documentoCad, rgDocCad, cpfDocCad,nascimentoCad, IDLocais, abrigoCad, domPartCad, IDNumRua, tempRuaCad, IDMotivoCad, tempcidCad, familiaCad, cttParenteCad, attCad, IDAtendeCad, carteiraCad, IDDinheiro, benefCad, qualBenefCad) VALUES ('" + req.body.nomeCad + "','" + req.body.chamadoCad + "','" + req.body.documentoCad + "','" + req.body.rgDocCad + "','" + req.body.cpfDocCad + "','" + req.body.nascimentoCad + "','" + req.body.IDLocais + "','" + req.body.abrigoCad + "','" + req.body.domPartCad + "','" + req.body.IDNumRua + "','" + req.body.tempRuaCad + "','" + req.body.IDMotivoCad + "','" + req.body.tempcidCad + "','" + req.body.familiaCad + "','" + req.body.cttParenteCad + "','" + req.body.attCad + "','" + req.body.IDAtendeCad + "','" + req.body.carteiraCad + "','" + req.body.IDDinheiro + "','" + req.body.benefCad + "','" + req.body.qualBenefCad + "')";
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
app.post('/cadastrodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaCadastro  WHERE IDCadastro = '" + req.body.IDCadastro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/cadastrousers', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaCadastro ORDER BY IDCadastro COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/cadastroupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaCadastro SET nomeCad = '" + req.body.nomeCad + "' WHERE IDCadastro = '" + req.body.IDCadastro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



//Ficha Atendimento

// Insere um registro (é o C do CRUD - Create)
app.post('/atendimentoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

   var sql = "INSERT INTO Atendimento (tituloAtendi, observacaoAtendi, dataAtendi, horaAtendi, IDEncaminhamento) VALUES ( '" + req.body.tituloAtendi + "', '" + req.body.observacaoAtendi + "', '" + req.body.dataAtendi + "', '" + req.body.horaAtendi + "', '" + req.body.IDEncaminhamento + "')";
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
app.post('/atendimentodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Atendimento WHERE IDAtendimento = '"+ req.body.IDAtendimento + "'";
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
app.post('/atendimentoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Atendimento SET tituloAtendi = '" + req.body.tituloAtendi + "' WHERE IDAtendimento = '" + req.body.IDAtendimento + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/atendimentoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM Atendimento ORDER BY IDAtendimento COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});




//Ficha Atendimento Externo

// Insere um registro (é o C do CRUD - Create)
app.post('/atendimentoexternoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaAtendimentoExterno (CRAS, CREAS, CRPSR, IAAlbergue, hospiClini, outro) VALUES ( '" + req.body.CRAS + "', '" + req.body.CREAS + "', '" + req.body.CRPSR + "', '" + req.body.IAAlbergue + "', '" + req.body.hospiClini + "', '" + req.body.outro + "')";
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
app.post('/atendimentoexternodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaAtendimentoExterno WHERE IDAtendimentoExterno = '" + req.body.IDAtendimentoExterno + "'";
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
app.post('/atendimentoexternoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaAtendimentoExterno SET CRAS = '" + req.body.CRAS + "' WHERE IDAtendimentoExterno = '" + req.body.IDAtendimentoExterno + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/atendimentoexternoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaAtendimentoExterno ORDER BY IDAtendimentoExterno COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


// FICHA DINHEIRO GANHO


// Insere um registro (é o C do CRUD - Create)
app.post('/dinheiroganhoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaDinheiroGanho (construcaoCivil, servicoGeral, flanelinha, pedeDin, carregador, catadorMaterial, naoRespondeu, outros, outrosQual) VALUES ('" + req.body.construcaoCivil + "', '"  + req.body.servicoGeral + "', '"  + req.body.flanelinha + "','" + req.body.pedeDin + "','"  + req.body.carregador + "','"  + req.body.catadorMaterial + "','"  + req.body.naoRespondeu + "','"  + req.body.outros + "','"  + req.body.outrosQual + "')";
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
app.post('/dinheiroganhodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaDinheiroGanho WHERE IDDinheiro = '" + req.body.IDDinheiro + "'";
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
app.post('/dinheiroganhoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaDinheiroGanho SET construcaoCivil = '" + req.body.construcaoCivil + "' WHERE IDDinheiro = '" + req.body.IDDinheiro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/dinheiroganhoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaDinheiroGanho ORDER BY IDDinheiro COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FICHA NUMERO DE DIAS NA RUA


// Insere um registro (é o C do CRUD - Create)
app.post('/numerodiasruainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaNumeroDiasRua (ruaNum, albergueNum, domicilioPartNum, outroNum, outroQualNum) VALUES ('" + req.body.ruaNum + "', '" + req.body.albergueNum + "', '" + req.body.domicilioPartNum + "','" + req.body.outroNum + "','" + req.body.outroQualNum + "')";
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
app.post('/numerosdiasruadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaNumeroDiasRua WHERE IDNumeroDiasRua = '" + req.body.IDNumeroDiasRua + "'";
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
app.post('/numerodiasruaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaNumeroDiasRua SET ruaNum = '" + req.body.ruaNum + "' WHERE IDNumeroDiasRua = '" + req.body.IDNumeroDiasRua + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/numerodiasruaselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaNumeroDiasRua ORDER BY IDNumeroDiasRua COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// FICHA TOALHA



// Retorna todos registros (é o R do CRUD - Read)
app.get('/selecttoalha', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Toalha';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (Toalha)
app.post('/toalhainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "INSERT INTO Toalha (numeroToalha) VALUES ('"+ req.body.numeroToalha +"')";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close();
  res.end();
});

// Exclui um registro (Toalha)
app.post('/toalhadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM Toalha WHERE IDToalha = '"+ req.body.IDToalha +"'";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (toalha)
app.post('/toalhaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Toalha SET numeroToalha = '" + req.body.numeroToalha + "' WHERE IDToalha = " + req.body.IDToalha;
  
  var db = new sqlite3.Database(DBPATH);
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












// Atualiza um registro (é o U do CRUD - Update)
app.post('/abordagemupdate2', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaAbordagem SET "+req.body.campo+" = '" + req.body.dado + "' WHERE IDAbordagem = '" + req.body.IDAbordagem + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});