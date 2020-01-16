import yaml from 'js-yaml';
import ini from 'ini';

const parserType = {
  json: JSON.parse,
  yml: yaml.safeLoad,
  ini: ini.parse,
};

const parse = (data, type) => parserType[type](data);

export default parse;
