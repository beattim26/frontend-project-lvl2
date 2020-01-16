import mainRender from './main-render';
import plainRender from './plain-render';
import jsonRender from './json-render';
import buildAst from '../ast-builder';

const formatType = {
  main: mainRender,
  plain: plainRender,
  json: jsonRender,
};

const getDiff = (firstData, secondData, format) => formatType[format](buildAst(firstData,
  secondData));

export default getDiff;
