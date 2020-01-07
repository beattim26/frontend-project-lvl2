import gendiff from '../src';
import mainResult from '../__fixtures__/results/main';
import plainResult from '../__fixtures__/results/plain';

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
    expect(gendiff(pathToBefore('json'), pathToAfter('json'))).toEqual(mainResult);
  });

  test('gendiff YAML', () => {
    expect(gendiff(pathToBefore('yml'), pathToAfter('yml'))).toEqual(mainResult);
  });

  test('gendiff INI', () => {
    expect(gendiff(pathToBefore('ini'), pathToAfter('ini'))).toEqual(mainResult);
  });

  test('gendiff plain format', () => {
    expect(gendiff(pathToBefore('json'), pathToAfter('json'), 'plain')).toEqual(plainResult);
  });
});
