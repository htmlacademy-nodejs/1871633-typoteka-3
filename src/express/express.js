'use strict';

const express = require(`express`);
const chalk = require(`chalk`);

const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const {Port} = require(`../constants`);

const app = express();

app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.listen(Port.DEFAULT_EXPRESS_PORT, () => console.info(chalk.blue(`Сервер запущен на порту: ${Port.DEFAULT_EXPRESS_PORT}`)));
