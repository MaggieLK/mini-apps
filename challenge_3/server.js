const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use('/', express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'checkout'
});

app.post('/', (req, res) => {
  let query = Object.keys(req.body)[0]
  connection.connect(err => {
    if (err) throw err;
  })
  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    res.cookie('checkout_id', rows.insertId);
    res.end(`${rows.insertId}`);

  })
})

app.post('/F1', (req, res) => {
  let query = Object.keys(req.body)[0] +'=' + Object.values(req.body)[0]
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.end();
  })
})

app.post('/F2', (req, res) => {
  let query = Object.keys(req.body)[0] +'=' + Object.values(req.body)[0]
  connection.query(query, function (err, rows) {
    if (err) throw err;
    res.end();
  })
})

app.post('/F3', (req, res) => {
  let query = Object.keys(req.body)[0] +'=' + Object.values(req.body)[0]
  connection.query(query, function (err, rows) {
    if (err) throw err;
    connection.end()
    res.end();
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})