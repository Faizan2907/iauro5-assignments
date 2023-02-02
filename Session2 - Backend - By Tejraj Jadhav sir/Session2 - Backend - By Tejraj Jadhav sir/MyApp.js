const express = require('express');
const mysql = require('mysql');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'iauro'
});

connection.connect(error => {
  if (error) throw error;
  console.log('MySQL connected');
});

mongoose.connect('mongodb://localhost/iauro', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mongoSchema = mongoose.Schema({
  name: String,
  age: Number
});

const MongoModel = mongoose.model('MongoModel', mongoSchema);

app.get('/mysql', (req, res) => {
  connection.query('SELECT * FROM table', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/mongo', (req, res) => {
  MongoModel.find((error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

