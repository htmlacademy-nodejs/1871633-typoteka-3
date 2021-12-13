'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const router = require(`./routes/index`);

const {Port} = require(`../constants`);

const app = express();

app.use(router);

app.listen(Port.DEFAULT_EXPRESS_PORT, () => console.info(chalk.blue(`Сервер запущен на порту: ${Port.DEFAULT_EXPRESS_PORT}`)));
