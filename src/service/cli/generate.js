'use strict';

const chalk = require(`chalk`);
const moment = require(`moment`);
const fs = require(`fs`).promises;
const {
  getRandomInt,
  shuffle,
} = require(`../../utils`);
const {ExitCode} = require(`../../constants`);

const FilePath = {
  SENTENCES: `./data/sentences.txt`,
  TITLES: `./data/titles.txt`,
  CATEGORIES: `./data/categories.txt`,
};

const Posts = {
  DEFAULT_COUNT: 1,
  MAX_COUNT: 1000
};

const MAX_COUNT_SENTENCES_IN_ANNOUNCE = 5;
const MONTHS_LIMIT = 3;
const ERROR_MESSAGE = `Не больше 1000 публикаций`;
const FILE_NAME = `mocks.json`;

const getRandomDate = () => {
  const currentDate = moment().valueOf();
  const startDate = moment().subtract(MONTHS_LIMIT, `months`).valueOf();
  return moment(getRandomInt(startDate, currentDate)).format(`YYYY-MM-DD hh:mm:ss`);
};

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.toString().trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const generatePosts = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    createdDate: getRandomDate(),
    announce: shuffle(sentences).slice(0, MAX_COUNT_SENTENCES_IN_ANNOUNCE).join(` `),
    fullText: shuffle(sentences).slice(0, getRandomInt(1, sentences.length)).join(` `),
    category: shuffle(categories).slice(0, getRandomInt(1, categories.length)),
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const data = await Promise.all([
      readContent(FilePath.TITLES),
      readContent(FilePath.CATEGORIES),
      readContent(FilePath.SENTENCES)
    ]);

    const [count] = args;
    if (count >= Posts.MAX_COUNT) {
      console.log(chalk.red(ERROR_MESSAGE));
      process.exit(ExitCode.ERROR);
    }

    const countPosts = Number.parseInt(count, 10) || Posts.DEFAULT_COUNT;
    const content = JSON.stringify(generatePosts(countPosts, ...data));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
      process.exit(ExitCode.SUCCESS);
    } catch (e) {
      console.error(chalk.red(`Can't write data to file...`));
      process.exit(ExitCode.ERROR);
    }
  }
};
