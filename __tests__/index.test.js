import gendiff from '../src';
import result from '../__fixtures__/__result';

describe('gendiff', () => {
  test('gendiff JSON', () => {
    const pathToBefore = './__fixtures__/__json/__before.json';
    const pathToAfter = './__fixtures__/__json/__after.json';

    expect(gendiff(pathToBefore, pathToAfter)).toEqual(result);
    expect(gendiff('')).toBe('');
    expect(gendiff(pathToBefore)).toBe('');
  });

  test('gendiff YAML', () => {
    const pathToBefore = './__fixtures__/__yaml/__before.yml';
    const pathToAfter = './__fixtures__/__yaml/__after.yml';

    expect(gendiff(pathToBefore, pathToAfter)).toEqual(result);
    expect(gendiff('')).toBe('');
    expect(gendiff(pathToBefore)).toBe('');
  });
});
