import buildAst from '../ast-builder';

const render = (firstData, secondData) => JSON.stringify(buildAst(firstData, secondData));

export default render;
