var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get("/mars", function(req, res) {
  res.send('Hello Sean!\n')
})

app.get("/echo", function(req, res) {
  res.send('application inforamtion will be ready soon!\n')
})

app.listen(8090, function () {
  console.log('Example app listening on port 8090!');
});

