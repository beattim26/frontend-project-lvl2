import _ from 'lodash';

const stringify = (key, value, spaces) => {
  if (!_.isObject(value)) {
    return `${' '.repeat(spaces)}${key}: ${value}\n`;
  }

  return `${' '.repeat(spaces)}${key}: {\n${Object.keys(value)
    .map((item) => stringify(item, value[item], spaces + 4)).join('')}${' '.repeat(spaces + 2)}}\n`;
};

const renderOperation = {
  added: (item, spaces) => stringify(`+ ${item.key}`, item.value, spaces),
  deleted: (item, spaces) => stringify(`- ${item.key}`, item.value, spaces),
  changed: (item, spaces) => stringify(`- ${item.key}`, item.changedValues[0], spaces) + stringify(`+ ${item.key}`, item.changedValues[1], spaces),
  unchanged: (item, spaces) => stringify(`  ${item.key}`, item.value, spaces),
  hasChild: (item, spaces) => {
    const count = item.children.map((element) => renderOperation[element.type](element,
      spaces + 4)).join('');
    return `${' '.repeat(spaces + 2)}${item.key}: {\n${count}${' '.repeat(spaces + 2)}}\n`;
  },
};

const render = (ast) => `{\n${ast.map((item) => renderOperation[item.type](item, 0)).join('')}}`;

export default render;
