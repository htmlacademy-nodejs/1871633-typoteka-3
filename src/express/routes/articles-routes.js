'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

// Публикации определённой категории;
articlesRouter.get(`/category/:id`, (req, res) => res.send(`articles/category/${req.params.id}`));
// Страница создания новой публикации;
articlesRouter.get(`/add`, (req, res) => res.send(`articles/add`));
// Редактирование публикации;
articlesRouter.get(`/edit/:id`, (req, res) => res.send(`articles/edit/${req.params.id}`));
// Страница публикации;
articlesRouter.get(`/:id`, (req, res) => res.send(`articles/${req.params.id}`));

module.exports = articlesRouter;
