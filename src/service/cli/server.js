'use strict';

const express = require(`express`);
const {Router} = require(`express`);
const router = new Router();

const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {Port, MOCKS_FILE_NAME} = require(`../../constants`);

const app = express();

app.use(express.json());
app.use(router);

const getPosts = async () => {
  try {
    const fileContent = await fs.readFile(MOCKS_FILE_NAME);
    const mocks = JSON.parse(fileContent);
    const message = mocks.map((post) => `<li>${post.title}</li>`).join(``);
    return `<ul>${message}</ul>`;
  } catch (e) {
    console.error(chalk.red(e));
    return [];
  }
};

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args || Port.DEFAULT_SERVICE_PORT;
    const port = Number.parseInt(customPort, 10) || Port.DEFAULT_SERVICE_PORT;

    router.get(`/posts`, (async (req, res) => {
      const posts = await getPosts();
      res.send(posts);
    }));

    app.listen(port, () => console.info(chalk.blue(`Сервер запущен на порту: ${port}`)));
  }
};
