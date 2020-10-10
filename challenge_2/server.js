const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
//const multer = require('multer') // v1.0.5
//const upload = multer()

app.use(express.static('client'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.post('/', (req, res) => {
  var length = req.body.textarea.length;

  var parsed;
  var csv = '';
  if (req.body.textarea[length -1] === ';'){
    parsed = JSON.parse(req.body.textarea.slice(0,length-1))
  } else {
    parsed = JSON.parse(req.body.textarea);
  }

  var findKeys = (obj) => {
    var keys = [];
    var childKeys = [];
    for(var key in obj) {
      if (key === 'children') {
        obj[key].forEach((child) => {
          childKeys.concat(findKeys(child));
        })
      } else{
        keys.push(key);
      }
    }
    childKeys.forEach(key => {
      if(keys.indexOf(key) === -1) {
        keys.push(key);
      }
    })
    return keys;
  }

  var inputValues = (keys, obj) => {
    var string = '';
    keys.forEach(key => {
      string += ',' + obj[key];
    })
    for(var key in obj) {
      if (key === 'children') {
        string += '\n'
        obj[key].forEach((child) => {
          string += inputValues(keys, child);
        })
      }
    }
    return string.slice(1,string.length);
  }
  var csvKeys = findKeys(parsed);
  csv = csvKeys.join(',') + '\n' + inputValues(csvKeys, parsed);

  res.status(202);
  res.send(
    `<html>
      <head>
        <link href="/styles.css" rel="stylesheet">
      </head>
      <body>
        <div id="grid">
          <div id="form">
            <form method="POST" action="/">
              <h1>Input JSON: </h1>
              <textarea name="textarea"></textarea>
              </br>
              <input type="submit" value="Submit">
            </form>
          </div>
          <div id="response">
            <h1>Response: </h1>
            <textarea readonly>${csv}</textarea>
            <input type="submit" value="Download">
          </div>
        </div>
            <script src="./app.js"></script>
      </body>
    </html>`)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})