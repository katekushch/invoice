import { initServer } from './server';
import {initRouts} from './routes';

const bodyParser = require('body-parser');

const express = require('express');
const logger = require('morgan');

const errorHandler = require('errorhandler');

const app = express();

initServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initRouts(app);

app.use(errorHandler());

module.exports = app;

