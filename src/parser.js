import yaml from 'js-yaml';
import ini from 'ini';

const extname = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};

const parse = (data, ext) => extname[ext](data);

export default parse;
