const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const errorHandler = require('errorhandler');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(errorHandler());
server.use(logger('dev'));

server.get('/', (req, res) => res.send('App is working'));

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = server;
