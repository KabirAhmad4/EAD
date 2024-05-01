const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./utils/db');

// You can choose any available port number
// call back function jis ko call kreny ki zarorat ni ha ya aLready    
 //call hota ha 
// can be called Arrow Function
 
// app.get('/welcome', (req, res) => { 

//     res.send("Hello, Kabir");
//  });
// line 10-13 
// api
const Routes=require('./routes/Routes');
app.use('/api',Routes);


app.use(bodyParser.json());

app.listen(port, () => {
console.log('Server is listening on port ${port} ');
});