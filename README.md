Git-Parse
=========

[![NPM version](https://img.shields.io/npm/v/git-parse.svg)](https://www.npmjs.com/package/git-parse)
[![NPM Downloads](https://img.shields.io/npm/dm/git-parse.svg?style=flat)](https://www.npmjs.org/package/git-parse)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/git-parse)](https://bundlephobia.com/result?p=git-parse)

> `git-parse` is a utility which generates an array of javascript objects representing the current branch of a local git repository's commit history.

### Details

- Support NodeJS >= 12

### Installation

```bash
npm install git-parse
```

### Usage

```js
const { gitToJs } = require('git-parse');

const commitsPromise = gitToJs('path/to/repo/');

commitsPromise.then(commits => console.log(JSON.stringify(commits, null, 2)));
```

<details>
  <summary><b>Console output:</b></summary>

  ```json
  [
    {
      "hash": "7cedc121ee163d859dfdb9911e627d4b5933cc6d",
      "authorName": "mpackard@wayfair.com",
      "authorEmail": "mpackard@wayfair.com",
      "date": "Wed, 10 Jan 2018 16:44:52 -0500",
      "message": "initial setup",
      "filesAdded":[
          { "path": "packages/raspberry-popsicle/index.js" },
          { "path": "packages/raspberry-popsicle/package-lock.json" },
          { "path": "packages/raspberry-popsicle/package.json" }
      ],
      "filesDeleted": [],
      "filesModified": [],
      "filesRenamed": []
    },
    {
      "hash": "226f032eb87ac1eb18b7212eeaf1356980a9ae03",
      "authorName": "mpackard@wayfair.com",
      "authorEmail": "mpackard@wayfair.com",
      "date": "Wed, 10 Jan 2018 15:25:16 -0500",
      "message": "add README",
      "filesAdded": [
        { "path": "README.md" }
      ],
      "filesDeleted": [],
      "filesModified": [],
      "filesRenamed": []
    }
  ]
  ```
</details>

## API

### .gitToJs(pathToRepo, [options])

Returns a promise which resolves with a list of objects describing git commits on the current branch. `pathToRepo` is a string. `options` is an optional object with one property, `sinceCommit`, which is a commit hash. If `sinceCommit` is present, gitToJs will return logs for commits _after_ the commit specified.

```js
const { gitToJs } = require('git-parse');

const commitsPromise = gitToJs('path/to/repo/');

commitsPromise.then(commits => console.log(JSON.stringify(commits, null, 2)));
```

### .checkOutCommit(pathToRepo, commitHash, [options])

Checks a repository out to a given commit. `hash` is the commit hash. Options is an optional object with one property, `force`. `force` adds `--force` to the [underlying git checkout](https://git-scm.com/docs/git-checkout#git-checkout--f). Returns a promise.

### .gitPull(pathToRepo)

Runs 'git pull' on the repository at the given path. Returns a promise.

### .gitDiff(pathToRepo, commitHash1, [commitHash2], [file])

Returns a git diff given a path to the repo, a commit, an optional second commit, and an optional file path.

Returns a promise resolving with the diff as a string.

## Development

### Build

To generate a local distribution for the git-parse library run the following command:
```sh
yarn build
```

To build the library in the background on file changes, use:
```sh
yarn build:watch
```

### Code Formatting

To automatically format the code using [Prettier](https://prettier.io/) run:
```sh
yarn format
```
or
```sh
yarn format:check
```

### Linting

To lint the project using [ESLint](https://eslint.org/) run:
```sh
yarn lint
```

### Tests

To run the project tests using the [Jest](https://jestjs.io/) framework run:
```sh
yarn test
```

### Type Checking

To check the project for type errors using [Typescript](https://www.typescriptlang.org/) run:
```sh
yarn tsc
```

Use `--watch` to run the type checker in the background:
```sh
yarn tsc --watch
```

## License

This project is licensed under the BSD-2-Clause license.
