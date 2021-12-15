'use strict';

const {Router} = require(`express`);
const myRoutes = new Router();

// Мои публикации;
myRoutes.get(`/`, (req, res) => res.render(`pages/admin/my`));
// Комментарии к публикациям;
myRoutes.get(`/comments`, (req, res) => res.render(`pages/admin/comments`));

module.exports = myRoutes;
