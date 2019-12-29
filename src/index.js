import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import parse from './parser';

const getDiff = (firstData, secondData) => {
  const allKeys = _.union(Object.keys(firstData), Object.keys(secondData));

  return allKeys.reduce((acc, item) => {
    const firstValue = firstData[item];
    const secondValue = secondData[item];
    const addedValue = { ...acc, [item]: firstValue };
    const removedValue = { ...acc, [`- ${item}`]: firstValue };
    const changedValue = firstValue !== undefined
      ? { ...acc, [`+ ${item}`]: secondValue, [`- ${item}`]: firstValue }
      : { ...acc, [`+ ${item}`]: secondValue };

    if (_.has(secondData, item)) {
      return firstValue === secondValue
        ? addedValue
        : changedValue;
    }

    return removedValue;
  }, {});
};

const getData = (pathToFile) => fs.readFileSync(path.resolve(pathToFile), 'utf-8');
const getExt = (pathToFile) => path.extname(path.resolve(pathToFile));

const genDiff = (pathToBefore, pathToAfter) => {
  if (!pathToBefore || !pathToAfter) {
    return '';
  }

  const dataBefore = parse(getData(pathToBefore), getExt(pathToBefore));
  const dataAfter = parse(getData(pathToAfter), getExt(pathToAfter));

  return getDiff(dataBefore, dataAfter);
};

export default genDiff;
