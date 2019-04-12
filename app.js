var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Second");
});

app.listen(4000);
