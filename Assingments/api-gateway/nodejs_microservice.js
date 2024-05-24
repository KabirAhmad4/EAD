// nodejs_microservice.js
const express = require('express');

const app = express();
const PORT = 5001;

app.get('/', (req, res) =>
{
    res.send('Hello from Node.js microservice!');
});

app.listen(PORT, () =>
{
    console.log(`Node.js microservice running on port ${PORT}`);
});
