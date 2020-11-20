const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const { List, Task } = require('./db/models');

app.use(bodyParser.json());

app.get('/lists', (req, res) => {
    List.find({}).then((lists) => {
        res.send(lists);
    })
})

app.post('/lists', (req, res) => {
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })
});

app.patch('/lists/:id', (req, res) => {
    res.send('Hello world');
})

app.delete('/lists/:id', (req, res) => {
    res.send('Hello world');
})

app.listen(3004, () => {
    console.log('Listening on port 3004...');
})