import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const jsonParser = (pathToFile) => {
  const absolutePath = path.resolve(pathToFile);
  return JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));
};

const getDiff = (firstData, secondData) => {
  const allKeys = _.union(Object.keys(firstData), Object.keys(secondData));

  return allKeys.reduce((acc, item) => {
    const firstValue = firstData[item];
    const secondValue = secondData[item];

    if (_.has(secondData, item)) {
      return firstValue === secondValue
        ? { ...acc, [item]: firstValue }
        : { ...acc, [`+ ${item}`]: secondValue };
    }

    if (!_.has(secondData, item)) {
      return { ...acc, [`- ${item}`]: firstValue };
    }

    return acc;
  }, {});
};

const genDiff = (pathToBefore, pathToAfter) => {
  const dataBefore = jsonParser(pathToBefore);
  const dataAfter = jsonParser(pathToAfter);
  const diff = getDiff(dataBefore, dataAfter);
  console.log(diff);
};

genDiff('./__fixtures__/json/before.json', './__fixtures__/json/after.json');

export default genDiff;
