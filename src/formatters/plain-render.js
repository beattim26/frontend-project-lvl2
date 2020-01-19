import _ from 'lodash';

const stringifyValue = (value) => {
  if (!_.isObject(value)) {
    return value;
  }

  return '[complex value]';
};

const renderOperation = {
  added: (item, path) => `${path} was added with value: ${stringifyValue(item.value)}\n`,
  deleted: (item, path) => `${path} was removed\n`,
  changed: (item, path) => `${path} was updated. From ${stringifyValue(item.changedValues[0])} to ${stringifyValue(item.changedValues[1])}\n`,
  unchanged: (item, path) => `${path} was unchanged\n`,
  hasChild: (item, path) => item.children
    .map((element) => renderOperation[element.type](element, `${path}.${element.key}`)).join(''),
};

const render = (ast) => ast.map((item) => renderOperation[item.type](item, item.key)).join('').slice(0, -1);

export default render;
