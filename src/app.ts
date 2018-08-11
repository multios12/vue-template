import express, { NextFunction } from "express";
import fs from "fs";
import path from "path";
const createError = require("http-errors");

const app = express();

// browser-sync Setup
// if (app.get('env') == 'development') {
//   var browserSync = require('browser-sync');
//   var connectBrowserSync = require('connect-browser-sync');

//   var browserSyncConfigurations = { "files": path.join(__dirname, "../views/*") };
//   app.use(connectBrowserSync(browserSync(browserSyncConfigurations)));
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../sample")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));

app.use((req: express.Request, res: express.Response, next: FunctionConstructor) => { next(createError(404)); });
app.use((err: any, req: express.Request, res: express.Response, next: FunctionConstructor) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  fs.readFile("./dist/public/error.html", "utf-8", (readerr, data) => {
    data = data.replace("<%= message %>", err.message)
      .replace("<%= error.stack %>", err.stack)
      .replace("<%= error.status %>", err.status);
    res.send(data);
  });
});

module.exports = app;
