'use strict';

const {Router} = require(`express`);
const mainRoutes = new Router();

// Главная страница;
mainRoutes.get(`/`, (req, res) => res.render(`pages/main`));
// Регистрация;
mainRoutes.get(`/register`, (req, res) => res.render(`pages/login/sign-up`));
// Вход;
mainRoutes.get(`/login`, (req, res) => res.render(`pages/login/login`));
// Поиск;
mainRoutes.get(`/search`, (req, res) => res.render(`pages/search`));
// Категории;
mainRoutes.get(`/categories`, (req, res) => res.render(`pages/admin/all-categories`));

module.exports = mainRoutes;
