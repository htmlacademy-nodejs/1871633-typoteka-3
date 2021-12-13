'use strict';

const {Router} = require(`express`);
const myRoutes = new Router();

// Мои публикации;
myRoutes.get(`/`, (req, res) => res.send(`/my`));
// Комментарии к публикациям;
myRoutes.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = myRoutes;
