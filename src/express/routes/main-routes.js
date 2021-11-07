'use strict';

const {Router} = require(`express`);
const mainRoutes = new Router();

// Главная страница;
mainRoutes.get(`/`, (req, res) => res.send(`/`));
// Регистрация;
mainRoutes.get(`/register`, (req, res) => res.send(`/register`));
// Вход;
mainRoutes.get(`/login`, (req, res) => res.send(`/login`));
// Поиск;
mainRoutes.get(`/search`, (req, res) => res.send(`/search`));
// Категории;
mainRoutes.get(`/categories`, (req, res) => res.send(`/categories`));

module.exports = mainRoutes;
