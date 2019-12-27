import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  const fileBefore = fs.readFileSync('./__fixtures__/json/before.json', 'utf-8');
  const fileAfter = fs.readFileSync('./__fixtures__/json/after.json', 'utf-8');
  test('gendiff JSON', () => {
    const expected = {
      host: 'hexlet.io',
      '+ timeout': 20,
      '- timeout': 50,
      '- proxy': '123.234.53.22',
      '+ verbose': true,
      '- follow': false,
    };

    expect(gendiff(fileBefore, fileAfter)).toBe(expected);
    expect(gendiff()).toBe('');
    expect(gendiff(fileBefore)).toBe(fileBefore);
  });
});
