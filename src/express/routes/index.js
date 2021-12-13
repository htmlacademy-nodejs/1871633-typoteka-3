'use strict';

const {Router} = require(`express`);
const router = new Router();

const articlesRoutes = require(`./articles-routes`);
const myRoutes = require(`./my-routes`);
const mainRoutes = require(`./main-routes`);

router.use(`/articles`, articlesRoutes);
router.use(`/my`, myRoutes);
router.use(`/`, mainRoutes);

module.exports = router;
