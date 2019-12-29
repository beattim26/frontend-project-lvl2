import fs from 'fs';
import gendiff from '../src';
import resultJson from '../__fixtures__/__json/__result';

describe('gendiff', () => {
  test('gendiff JSON', () => {
    const pathToBefore = './__fixtures__/__json/__before.json';
    const pathToAfter = './__fixtures__/__json/__after.json';

    expect(gendiff(pathToBefore, pathToAfter)).toEqual(resultJson);
    expect(gendiff('')).toBe('');
    expect(gendiff(pathToBefore)).toEqual(JSON.parse(fs.readFileSync(pathToBefore, 'utf-8')));
  });
});
