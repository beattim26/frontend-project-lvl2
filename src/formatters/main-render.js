import _ from 'lodash';
import buildAst from '../ast-builder';

const stringify = (key, value, spaces) => {
  if (_.isObject(value)) {
    return `${' '.repeat(spaces)}${key}: {\n${Object.keys(value)
      .reduce((acc, item) => acc + stringify(item, value[item], spaces + 4), '')}${' '.repeat(spaces + 2)}}\n`;
  }

  return `${' '.repeat(spaces)}${key}: ${value}\n`;
};

const renderOperation = {
  added: (item, spaces) => stringify(`+ ${item.key}`, item.value, spaces),
  deleted: (item, spaces) => stringify(`- ${item.key}`, item.value, spaces),
  changed: (item, spaces) => stringify(`- ${item.key}`, item.value[0], spaces) + stringify(`+ ${item.key}`, item.value[1], spaces),
  unchanged: (item, spaces) => stringify(`  ${item.key}`, item.value, spaces),
  hasChild: (item, spaces) => {
    const count = item.children.reduce((acc, element) => acc + renderOperation[element.type](element, spaces + 4), '');
    return `${' '.repeat(spaces + 2)}${item.key}: {\n${count}${' '.repeat(spaces + 2)}}\n`;
  },
};

const render = (firstData, secondData) => {
  const ast = buildAst(firstData, secondData);

  return `{\n${ast.reduce((acc, item) => acc + renderOperation[item.type](item, 0), '')}}`;
};

export default render;
