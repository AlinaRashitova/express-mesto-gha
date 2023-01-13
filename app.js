const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { NOT_FOUND_ERROR_CODE } = require('./constants/errors');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

// const path = require('path');

const { PORT = 3000 } = process.env;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '63c039e916328352a785d0b5',
  };

  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use((req, res) => {
  res.status(NOT_FOUND_ERROR_CODE).send({ message: 'Ошибка 404: несуществующая страница' });
});

app.listen(PORT);
