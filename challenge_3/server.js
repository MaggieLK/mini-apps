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
  console.log('hit post')
  console.log(req.body)
  connection.connect(err => {
    if (err) throw err;
    console.log('connected')
  })
  connection.query('DESCRIBE purchases', function (err, rows, fields) {
    if (err) throw err;

    console.log('tabledata ')
    connection.end()
    res.end()
  })




})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

