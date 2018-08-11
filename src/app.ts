import express, { NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
var createError = require('http-errors');

var app = express();

// browser-sync Setup 
// if (app.get('env') == 'development') {
//   var browserSync = require('browser-sync');
//   var connectBrowserSync = require('connect-browser-sync');

//   var browserSyncConfigurations = { "files": path.join(__dirname, "../views/*") };
//   app.use(connectBrowserSync(browserSync(browserSyncConfigurations)));
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../sample')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.use(function (req: express.Request, res: express.Response, next: Function) { next(createError(404)) });
app.use(function (err: any, req: express.Request, res: express.Response, next: Function) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  fs.readFile("./dist/public/error.html", 'utf-8', function (readerr, data) {
    data = data.replace('<%= message %>', err.message).replace('<%= error.stack %>', err.stack).replace('<%= error.status %>', err.status);
    res.send(data);
  })
});

module.exports = app;
