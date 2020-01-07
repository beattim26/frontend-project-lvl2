export default JSON.stringify(
  [{
    key: 'common',
    type: 'hasChild',
    children: [
      { key: 'setting1', type: 'unchanged', value: 'Value 1' },
      { key: 'setting2', type: 'deleted', value: 200 },
      { key: 'setting3', type: 'changed', value: [true, { key: 'value' }] },
      {
        key: 'setting6',
        type: 'hasChild',
        children: [
          { key: 'key', type: 'unchanged', value: 'value' },
          { key: 'ops', type: 'added', value: 'vops' },
        ],
      },
      { key: 'follow', type: 'added', value: false },
      { key: 'setting4', type: 'added', value: 'blah blah' },
      { key: 'setting5', type: 'added', value: { key5: 'value5' } },
    ],
  },
  {
    key: 'group1',
    type: 'hasChild',
    children: [
      { key: 'baz', type: 'changed', value: ['bas', 'bars'] },
      { key: 'foo', type: 'unchanged', value: 'bar' },
      { key: 'nest', type: 'changed', value: [{ key: 'value' }, 'str'] },
    ],
  },
  { key: 'group2', type: 'deleted', value: { abc: 12345 } },
  { key: 'group3', type: 'added', value: { fee: 100500 } }],
);
