#!/usr/bin/env node

import commander from 'commander';
import gendiff from '..';

commander
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(gendiff)
  .parse(process.argv);
