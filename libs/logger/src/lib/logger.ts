import chalk from 'chalk';

export const logger = {
  info: (...msg) => console.log(chalk.cyanBright(...msg)),
  warn: console.error,
  error: console.error
}