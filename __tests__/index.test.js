import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  let mainResult;
  let plainResult;
  let jsonResult;
  let pathToBefore;
  let pathToAfter;

  beforeAll(() => {
    mainResult = fs.readFileSync('./__fixtures__/results/main.txt', 'utf-8');
    plainResult = fs.readFileSync('./__fixtures__/results/plain.txt', 'utf-8');
    jsonResult = fs.readFileSync('./__fixtures__/results/json.json', 'utf-8');
  });

  beforeEach(() => {
    pathToBefore = (ext) => `./__fixtures__/${ext}/before.${ext}`;
    pathToAfter = (ext) => `./__fixtures__/${ext}/after.${ext}`;
  });

  test('gendiff JSON', () => {
    expect(gendiff(pathToBefore('json'), pathToAfter('json'))).toBe(mainResult);
  });

  test('gendiff YAML', () => {
    expect(gendiff(pathToBefore('yml'), pathToAfter('yml'))).toBe(mainResult);
  });

  test('gendiff INI', () => {
    expect(gendiff(pathToBefore('ini'), pathToAfter('ini'))).toBe(mainResult);
  });

  test('gendiff plain format', () => {
    expect(gendiff(pathToBefore('json'), pathToAfter('json'), 'plain')).toBe(plainResult);
  });

  test('gendiff json format', () => {
    expect(gendiff(pathToBefore('json'), pathToAfter('json'), 'json')).toEqual(jsonResult);
  });
});
