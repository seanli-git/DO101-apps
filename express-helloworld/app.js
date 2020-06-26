var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get("/mars", function(req, res) {
  res.send('Hello Sean!\n')
})
app.listen(8090, function () {
  console.log('Example app listening on port 8090!');
});

