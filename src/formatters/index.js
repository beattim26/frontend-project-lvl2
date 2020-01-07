import mainRender from './main-render';
import plainRender from './plain-render';

const formats = {
  main: mainRender,
  plain: plainRender,
};

const render = (firstData, secondData, format) => formats[format](firstData, secondData);

export default render;
