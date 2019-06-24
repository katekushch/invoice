const express = require('express');
const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const server = express();


const PORT = process.env.PORT || 3000;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

server.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
server.get('/', (req, res) => res.send('App is working'));

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = server;
