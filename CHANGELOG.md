# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 3.0.0 (August 8, 2022)

- Bump minimum Node version to `14` and bump Lerna to `5.1.8`
- Upgrade `yarn` to `3.2.2` and add `outdated` plugin
- Major bumps:
  - `@commitlint/cli` to `^17.0.3`
  - `@commitlint/config-conventional` to `^17.0.3`
  - `@types/jest` to `^28.1.6`
  - `eslint` to `8.20.0`
  - `eslint-plugin-flowtype` to `8.0.3`
  - `husky` to `^8.0.1`
  - `jest` to `^28`
  - `pinst` to `^3.0.0`
- Minor and patch bumps:
  - `@babel/cli` to `^7.18.9`
  - `@babel/core` to `^7.18.9`
  - `@babel/eslint-parser` to `^7.18.9`
  - `@babel/plugin-proposal-class-properties` to `^7.18.6`
  - `@babel/plugin-proposal-object-rest-spread` to `^7.18.9`
  - `@babel/preset-env` to `^7.18.9`
  - `@babel/preset-typescript` to `^7.18.6`
  - `@typescript-eslint/eslint-plugin` to `^5.30.7`
  - `@typescript-eslint/parser` to `^5.30.7`
  - `eslint-plugin-import` to `2.26.0`
  - `prettier` to `^2.7.1`
  - `typescript` to `^4.7.4`

## 2.1.2 (June 28, 2022)

- Upgrade `minimist` dep `^1.2.6`
- Allow whitespace in file names for files modified, deleted, or added in parsed commit output.
- Add yarn resolutions for node-fetch `^2.6.7` and json-schema `^0.4.0` to avoid vulnerabilities.

## 2.1.1 (March 29, 2022)

### Chores

- Migrates package manager from npm to yarn2
- Uses node 12 instead of 14 to better support apollo-graphql downstream
- Replace Flow with TypeScript for type checking
- Bundle TS types with library
- Add workflow to auto close PRs with no response from the author after 30 days
- Add workflow to close stale PRs and Issues
- Add checks via [https://www.npmjs.com/package/husky](husky) and [commit-lint](https://www.npmjs.com/package/@commitlint/cli) to validate commit messages match the [Conventional Commit specification](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## 2.0.0 (November 8, 2021)

### Features

- Changelog will now track changes when they are made!
- Increased verbosity in `npm ci` for GitHub Action checks

### Bug Fixes

- Removed unused `inquirer` and `lodash` dependencies
- Removed unused `nock` dependency

### Breaking Changes

- Updated project to indicate support for Nodejs v14.x and above
