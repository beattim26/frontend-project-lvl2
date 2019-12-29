import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const jsonParser = (pathToFile) => {
  if (!pathToFile) {
    return '';
  }

  const absolutePath = path.resolve(pathToFile);
  return JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));
};

const getDiff = (firstData, secondData) => {
  const allKeys = _.union(Object.keys(firstData), Object.keys(secondData));

  return allKeys.reduce((acc, item) => {
    const firstValue = firstData[item];
    const secondValue = secondData[item];
    const addedValue = { ...acc, [item]: firstValue };
    const changedValue = firstValue !== undefined
      ? { ...acc, [`+ ${item}`]: secondValue, [`- ${item}`]: firstValue }
      : { ...acc, [`+ ${item}`]: secondValue };
    const removedValue = { ...acc, [`- ${item}`]: firstValue };

    if (_.has(secondData, item)) {
      return firstValue === secondValue
        ? addedValue
        : changedValue;
    }

    return removedValue;
  }, {});
};

const genDiff = (pathToBefore, pathToAfter) => {
  const dataBefore = jsonParser(pathToBefore);
  const dataAfter = jsonParser(pathToAfter);

  if (!pathToBefore && !pathToAfter) {
    return '';
  }

  if (!pathToAfter) {
    return dataBefore;
  }

  return getDiff(dataBefore, dataAfter);
};

genDiff('./__fixtures__/__json/__before.json', './__fixtures__/__json/__after.json');

export default genDiff;
