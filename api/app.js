const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const { List, Task } = require('./db/models');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/task-manager', (req, res) => {
    List.find({}).then((lists) => {
        res.send(lists);
    });
});

app.post('/task-manager', (req, res) => {
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    });
});

app.patch('/task-manager/:id', (req, res) => {
    List.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

app.delete('/task-manager/:id', (req, res) => {
    List.findOneAndRemove({ 
        _id: req.params.id
     }).then((removedListDoc) => {
        res.send(removedListDoc);
     });
});


app.get('/task-manager/:listId/tasks', (req, res) => {
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    });
});

app.post('/task-manager/:listId/tasks', (req, res) => {
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    });
});

app.patch('/task-manager/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndUpdate({ 
        _id: req.params.taskId,
        _listId: req.params.listId
     }, {
         $set: req.body
        }
    ).then(() => {
        res.send({ message: 'Updated!' });
    });
});

app.delete('/task-manager/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndRemove({ 
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc);
    });
});

app.listen(3001, () => {
    console.log('Listening on port 3000...');
});