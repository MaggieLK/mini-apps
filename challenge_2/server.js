const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const multer = require('multer') // v1.0.5
const upload = multer()
const fs = require('fs');

app.use(express.static('client'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.post('/csvgenerate', upload.single('fileUpload'), (req, res) => {
  var fileString = req.file.buffer.toString();
  var length = fileString.length;

  var parsed;
  var csv = '';
  if (fileString[length -1] === ';'){
    parsed = JSON.parse(fileString.slice(0,length-1))
  } else {
    parsed = JSON.parse(fileString);
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

  fs.writeFile('csvGenerated', csv, (err) => {
    if (err) {
      console.log(err)
    }
  })

  res.status(202);
  res.send(csv)
})

app.get('/download', (req, res) => {

  var file = Object.keys(req.body)[0];

  res.download('csvGenerated',function (err) {
    if (err) {
      console.log(err)
    }
  })



})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})