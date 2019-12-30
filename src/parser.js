import yaml from 'js-yaml';
import ini from 'ini';

const formats = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};

const parse = (data, ext) => formats[ext](data);

export default parse;
