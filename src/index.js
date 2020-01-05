import path from 'path';
import fs from 'fs';
import parser from './parsers';
import getDiff from './render';

const getData = (pathToFile) => fs.readFileSync(path.resolve(pathToFile), 'utf-8');
const getExt = (pathToFile) => path.extname(path.resolve(pathToFile));

const genDiff = (pathToBefore, pathToAfter) => {
  if (!pathToBefore || !pathToAfter) {
    return '';
  }

  const dataBefore = parser(getData(pathToBefore), getExt(pathToBefore));
  const dataAfter = parser(getData(pathToAfter), getExt(pathToAfter));

  return getDiff(dataBefore, dataAfter);
};

export default genDiff;
