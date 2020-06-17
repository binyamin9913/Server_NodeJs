//import {encode} from './encode.js';
var cookieSession = require('cookie-session')
const express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
var data = fs.readFileSync('database.txt', 'utf8');
var counter=0;
app.post('/example', (req, res) => {
  res.send(`Full name is:${escape(req.body.fname)} ${escape(req.body.lname)} <br> ${encodeURI('http://localhost:8080/example')}`);
  for (let index = 0; index < data.length; index++) {
   if(req.body.fname==data[index])
      console.log("your name was found");
   else
     counter++;
   if(counter==data.length){
   console.log("your name was't found");
   continue; 
  }
  }
  if(counter!=data.length)
  redirect(307,'/sucssess.html');
});

app.post('/example/contant', (req, res) => {
    res.send(`Full name is:${req.body.fname} ${req.body.lname}`);
});

app.listen(8080, () => {
  console.log(`Server running on port${port}`);
});