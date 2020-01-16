import _ from 'lodash';

const stringifyValue = (value) => {
  const newValue = _.isObject(value) ? '[complex value]' : value;
  return newValue;
};

const renderOperation = {
  added: (item, path) => `${path} was added with value: ${stringifyValue(item.value)}\n`,
  deleted: (item, path) => `${path} was removed\n`,
  changed: (item, path) => `${path} was updated. From ${stringifyValue(item.value[0])} to ${stringifyValue(item.value[1])}\n`,
  unchanged: (item, path) => `${path} was unchanged\n`,
  hasChild: (item, path) => item.children
    .reduce((acc, element) => acc + renderOperation[element.type](element, `${path}.${element.key}`), ''),
};

const render = (ast) => ast.reduce((acc, item) => acc + renderOperation[item.type](item, item.key), '').slice(0, -1);

export default render;
