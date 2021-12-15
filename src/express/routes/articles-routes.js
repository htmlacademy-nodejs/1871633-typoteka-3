'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

// Публикации определённой категории;
articlesRouter.get(`/category/:id`, (req, res) => res.render(`pages/posts/articles-by-category`));
// Страница создания новой публикации;
articlesRouter.get(`/add`, (req, res) => res.render(`pages/admin/post`));
// Редактирование публикации;
articlesRouter.get(`/edit/:id`, (req, res) => res.render(`pages/admin/post`));
// Страница публикации;
articlesRouter.get(`/:id`, (req, res) => res.render(`pages/posts/post-detail`));

module.exports = articlesRouter;
