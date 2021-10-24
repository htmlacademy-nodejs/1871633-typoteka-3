'use strict';

const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = 3000;
const FILE_NAME = `mocks.json`;
const USER_ARGV_INDEX = 2;
const ExitCode = {
  SUCCESS: 0,
  ERROR: 1
};
const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  DEFAULT_PORT,
  FILE_NAME,
  ExitCode,
  HttpCode
};
