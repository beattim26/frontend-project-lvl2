import gendiff from '../src';
import result from '../__fixtures__/result';

describe('gendiff', () => {
  let pathToBefore;
  let pathToAfter;

  beforeEach(() => {
    pathToBefore = (ext) => `./__fixtures__/${ext}/before.${ext}`;
    pathToAfter = (ext) => `./__fixtures__/${ext}/after.${ext}`;
  });

  test('gendiff incorrect value', () => {
    expect(gendiff('')).toBe('');
    expect(gendiff(pathToBefore)).toBe('');
  });

  test('gendiff JSON', () => {
    expect(gendiff(pathToBefore('json'), pathToAfter('json'))).toEqual(result);
  });

  test('gendiff YAML', () => {
    expect(gendiff(pathToBefore('yml'), pathToAfter('yml'))).toEqual(result);
  });

  test('gendiff INI', () => {
    expect(gendiff(pathToBefore('ini'), pathToAfter('ini'))).toEqual(result);
  });
});
