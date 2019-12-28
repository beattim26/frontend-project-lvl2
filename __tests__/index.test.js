import gendiff from '../src';

describe('gendiff', () => {
  test('gendiff JSON', () => {
    const pathToBefore = './__fixtures__/json/before.json';
    const pathToAfter = './__fixtures__/json/after.json';
    const expected = {
      host: 'hexlet.io',
      '+ timeout': 20,
      '- timeout': 50,
      '- proxy': '123.234.53.22',
      '+ verbose': true,
      '- follow': false,
    };

    expect(gendiff(pathToBefore, pathToAfter)).toEqual(expected);
  });
});
