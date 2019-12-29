import yaml from 'js-yaml';

const formats = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
};

const parse = (data, extname) => formats[extname](data);

export default parse;
