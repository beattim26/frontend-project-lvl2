
install:
	npm install

start:
	npx babel-node src/index.js

help:
	npx babel-node src/bin/gendiff.js -h

build:
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run
