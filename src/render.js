import buildAst from './astBuilder';

const stringify = (key, value, depth) => {
  if (value instanceof Object) {
    return `${key}: {\n${Object.keys(value)
      .reduce((acc, item) => acc + stringify(item, value[item], depth * 2), '')}${' '.repeat(depth * 4)}}\n`;
  }

  return `${' '.repeat(depth * 2)}${key}: ${value}\n`;
};

const renderType = {
  added: (key, value, depth) => stringify(`+ ${key}`, value, depth),
  deleted: (key, value, depth) => stringify(`- ${key}`, value, depth),
  changed: (key, value, depth) => stringify(`- ${key}`, value[0], depth) + stringify(`+ ${key}`, value[1], depth),
  unchanged: (key, value, depth) => stringify(`  ${key}`, value, depth),
};

const getDiff = (firstData, secondData) => {
  const ast = buildAst(firstData, secondData);
  console.log(ast);

  const render = (list, str = '', depth = 1) => list.reduce((acc, item) => {
    if (item.type === 'hasChild') {
      return `${render(item.children, `${acc}${item.key}: {\n`, depth + 1)}}\n`;
    }

    return acc + renderType[item.type](item.key, item.value, depth);
  }, str);

  console.log(render(ast));

  return render(ast);
};

export default getDiff;
