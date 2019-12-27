#!/usr/bin/env node

import commander from 'commander';
import genDiff from '..';

commander
  .version('0.1.0')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => (
    console.log(genDiff(firstConfig, secondConfig))))
  .parse(process.argv);
