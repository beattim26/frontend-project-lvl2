# frontend-project-lvl2

[![Maintainability](https://api.codeclimate.com/v1/badges/bb1ac67390fe4e054020/maintainability)](https://codeclimate.com/github/beattim26/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bb1ac67390fe4e054020/test_coverage)](https://codeclimate.com/github/beattim26/frontend-project-lvl2/test_coverage)
[![Build Status](https://travis-ci.org/beattim26/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/beattim26/frontend-project-lvl2)

## Setup

```sh
$ make install
```

## Start Gendiff

```sh
$ gendiff file1.json file2.json
```

```sh
{
  host: 'hexlet.io',
  '+ timeout': 20,
  '- timeout': 50,
  '- proxy': '123.234.53.22',
  '- follow': false,
  '+ verbose': true
}
```
