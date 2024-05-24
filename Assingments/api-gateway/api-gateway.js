const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Forward requests to Python microservice
app.get('/api/python', async (req, res) =>
{
    try
    {
        const response = await axios.get('http://localhost:5000');
        res.send(response.data);
    } catch (error)
    {
        console.error('Error communicating with Python microservice:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Forward requests to Node.js microservice
app.get('/api/nodejs', async (req, res) =>
{
    try
    {
        const response = await axios.get('http://localhost:5001');
        res.send(response.data);
    } catch (error)
    {
        console.error('Error communicating with Node.js microservice:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Forward requests to Go microservice
app.get('/api/go', async (req, res) =>
{
    try
    {
        const response = await axios.get('http://localhost:5002');
        res.send(response.data);
    } catch (error)
    {
        console.error('Error communicating with Go microservice:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Forward requests to Ruby microservice
app.get('/api/ruby', async (req, res) =>
{
    try
    {
        const response = await axios.get('http://localhost:5003');
        res.send(response.data);
    } catch (error)
    {
        console.error('Error communicating with Ruby microservice:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () =>
{
    console.log(`API Gateway running on http://localhost:${PORT}`);
});
