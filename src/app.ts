import { initServer } from './server';
import { initRouts } from './routes';
//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const express = require('express');
const logger = require('morgan');

const errorHandler = require('errorhandler');

const app = express();

mongoose.connect(`${process.env.DATABASE_URL}`, {useNewUrlParser: true})
.then(() => console.log(`Connected to ${process.env.DATABASE_URL}`))
.catch(() => {
  console.log(`MongoDB connection error. Please make sure MongoDB is running.`);
  process.exit()
});

initServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

initRouts(app);

app.use(errorHandler());

module.exports = app;

