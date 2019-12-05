const express = require('express');
const app = express();

const port = 4000;

app.get("/spacee",function(request,response)
{
  console.log('Request received!')
    response.json({
      "Message":"Welcome to Node js"
    });
});

app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + " Started at :- " + datetime;
    console.log(message);
});
