const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "88087988",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res, next) => {
    //res.status(200).json({});
    //return
  const email = req.body.email;
  const password = req.body.password;

  db.getConnection((error, connection) => {
      if(error){
          connection.release();
          throw error;
      }
      connection.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
          res.status(200).json({});
          connection.release();
          return;
        }
        if (result.length == 0) {
          bcrypt.hash(password, saltRounds, (err, hash) => {
    
            connection.query(
              "INSERT INTO usuarios (email, password) VALUE (?,?)",
              [email, hash],
              (error, response) => {
                if (err) {
                  res.status(400).json({});
                  connection.release();
                  return;
                }
                res.status(200).json({status: 0, msg: "Usuário cadastrado com sucesso" });
                connection.release();
              }
            );
          });
        } else {
          res.status(200).json({status: 1, msg: "Email já cadastrado" });
          connection.release();
        }
      });
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.getConnection((error, connection) => {
    
    connection.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
      if (err) {
        res.send(err);
        connection.release();
        return;
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (error) {
            res.send(error);
          } else if (response) {
            res.send({ status: 0, msg: "Usuário logado" });
          } else {
            res.send({ status: 1, msg: "Senha incorreta" });
          }
          connection.release();
        });
      } else {
        res.send({status: 2, msg: "Usuário não registrado!" });
        connection.release();
      }
    });
  });

});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});