'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const router = require(`./routes/index`);
const path = require(`path`);
const {Port, PUBLIC_DIR} = require(`../constants`);

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(router);

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.listen(Port.DEFAULT_EXPRESS_PORT, () => console.info(chalk.blue(`Сервер запущен на порту: ${Port.DEFAULT_EXPRESS_PORT}`)));
