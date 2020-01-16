import path from 'path';
import fs from 'fs';
import parse from './parser';
import getDiff from './formatters';

const getData = (pathToFile) => fs.readFileSync(path.resolve(pathToFile), 'utf-8');
const getType = (pathToFile) => path.extname(path.resolve(pathToFile)).replace('.', '');

const genDiff = (pathToBefore, pathToAfter, format = 'main') => {
  const dataBefore = parse(getData(pathToBefore), getType(pathToBefore));
  const dataAfter = parse(getData(pathToAfter), getType(pathToAfter));

  return getDiff(dataBefore, dataAfter, format);
};

export default genDiff;
