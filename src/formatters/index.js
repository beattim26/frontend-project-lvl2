import mainRender from './main-render';
import plainRender from './plain-render';
import jsonRender from './json-render';

const formats = {
  main: mainRender,
  plain: plainRender,
  json: jsonRender,
};

const render = (firstData, secondData, format) => formats[format](firstData, secondData);

export default render;