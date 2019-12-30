import _ from 'lodash';

const getDiff = (firstData, secondData) => {
  const allKeys = _.union(Object.keys(firstData), Object.keys(secondData));

  return allKeys.reduce((acc, item) => {
    const firstValue = firstData[item];
    const secondValue = secondData[item];
    const addedValue = { ...acc, [item]: String(firstValue) };
    const removedValue = { ...acc, [`- ${item}`]: String(firstValue) };
    const changedValue = firstValue !== undefined
      ? { ...acc, [`+ ${item}`]: String(secondValue), [`- ${item}`]: String(firstValue) }
      : { ...acc, [`+ ${item}`]: String(secondValue) };

    if (_.has(secondData, item)) {
      return firstValue === secondValue
        ? addedValue
        : changedValue;
    }

    return removedValue;
  }, {});
};

export default getDiff;
