import _ from 'lodash';

const astOperations = [
  {
    type: 'hasChild',
    check: (firstData, secondData, item) => (_.isObject(firstData[item])
      && _.isObject(secondData[item])),
    operation: (firstValue, secondValue, func) => ({ children: func(firstValue, secondValue) }),
  },
  {
    type: 'added',
    check: (firstData, secondData, item) => (!_.has(firstData, item) && _.has(secondData, item)),
    operation: (firstValue, secondValue) => ({ value: secondValue }),
  },
  {
    type: 'deleted',
    check: (firstData, secondData, item) => (_.has(firstData, item) && !_.has(secondData, item)),
    operation: (firstValue) => ({ value: firstValue }),
  },
  {
    type: 'changed',
    check: (firstData, secondData, item) => (firstData[item] !== secondData[item]),
    operation: (firstValue, secondValue) => ({ changedValues: [firstValue, secondValue] }),
  },
  {
    type: 'unchanged',
    check: (firstData, secondData, item) => (firstData[item] === secondData[item]),
    operation: (firstValue) => ({ value: firstValue }),
  },
];

const getAstOperation = (firstData, secondData, item) => astOperations
  .find(({ check }) => check(firstData, secondData, item));

const buildAst = (firstData, secondData) => {
  const allKeys = _.union(Object.keys(firstData), Object.keys(secondData));

  return allKeys.map((key) => {
    const { type, operation } = getAstOperation(firstData, secondData, key);
    const value = operation(firstData[key], secondData[key], buildAst);

    return { key, type, ...value };
  });
};

export default buildAst;
