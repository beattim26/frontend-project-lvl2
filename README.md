# frontend-project-lvl2

[![Maintainability](https://api.codeclimate.com/v1/badges/bb1ac67390fe4e054020/maintainability)](https://codeclimate.com/github/beattim26/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bb1ac67390fe4e054020/test_coverage)](https://codeclimate.com/github/beattim26/frontend-project-lvl2/test_coverage)
[![Build Status](https://travis-ci.org/beattim26/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/beattim26/frontend-project-lvl2)

## Setup

```sh
$ make install
```

## Start Gendiff

You can compare formats: .json, .yml, .ini

```sh
$ gendiff before.json after.json
```

before.json:

```sh

{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value"
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345
  }
}
```

after.json:

```sh
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": {
      "key": "value"
    },
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops"
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "fee": 100500
  }
}
```

result:

```sh
{
  common: {
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: {
        key: value
      }
      setting6: {
          key: value
        + ops: vops
      }
    + follow: false
    + setting4: blah blah
    + setting5: {
        key5: value5
      }
  }
  group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: {
        key: value
      }
    + nest: str
  }
- group2: {
    abc: 12345
  }
+ group3: {
    fee: 100500
  }
}
```
You can also use "--format" to see another result

```sh
$ gendiff --format plain before.json after.json

common.setting1 was unchanged
common.setting2 was removed
common.setting3 was updated. From true to [complex value]
common.setting6.key was unchanged
common.setting6.ops was added with value: vops
common.follow was added with value: false
common.setting4 was added with value: blah blah
common.setting5 was added with value: [complex value]
group1.baz was updated. From bas to bars
group1.foo was unchanged
group1.nest was updated. From [complex value] to str
group2 was removed
group3 was added with value: [complex value]
```
