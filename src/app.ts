import { initServer } from './server';
import {initRouts} from './routes';

const express = require('express');
const logger = require('morgan');

const errorHandler = require('errorhandler');

const app = express();

initServer(app);

app.use(logger('dev'));

initRouts(app);

app.use(errorHandler());

module.exports = app;

