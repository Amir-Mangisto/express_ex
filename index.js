const express = require('express');
const app = express();
const port = 8000;

app.get('/',(request,response)=>{
    response.send('welcome user')
});

app.listen(port)