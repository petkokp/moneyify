const express = require('express');
const app = express();

app.get('/lists', (req, res) => {
    res.send('Hello world');
})

app.post('/lists', (req, res) => {
    res.send('Hello world');
})

app.patch('/lists/:id', (req, res) => {
    res.send('Hello world');
})

app.delete('/lists/:id', (req, res) => {
    res.send('Hello world');
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})