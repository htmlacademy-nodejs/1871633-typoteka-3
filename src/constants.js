'use strict';

const DEFAULT_COMMAND = `--help`;
const FILE_NAME = `mocks.json`;
const USER_ARGV_INDEX = 2;
const Port = {
  DEFAULT_SERVICE_PORT: 3000,
  DEFAULT_EXPRESS_PORT: 8080,
}
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
  Port,
  FILE_NAME,
  ExitCode,
  HttpCode
};
