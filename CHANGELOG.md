# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
