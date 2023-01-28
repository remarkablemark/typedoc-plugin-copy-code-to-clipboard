# typedoc-plugin-copy-code-to-clipboard

[![NPM](https://nodei.co/npm/typedoc-plugin-copy-code-to-clipboard.png)](https://nodei.co/npm/typedoc-plugin-copy-code-to-clipboard/)

[![NPM version](https://img.shields.io/npm/v/typedoc-plugin-copy-code-to-clipboard.svg)](https://www.npmjs.com/package/typedoc-plugin-copy-code-to-clipboard)
[![build](https://github.com/remarkablemark/typedoc-plugin-copy-code-to-clipboard/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/typedoc-plugin-copy-code-to-clipboard/actions/workflows/build.yml)

[TypeDoc](https://github.com/TypeStrong/typedoc) plugin that adds a button to copy code to clipboard for code blocks.

## Installation

[NPM](https://www.npmjs.com/package/typedoc-plugin-copy-code-to-clipboard):

```sh
npm install typedoc-plugin-copy-code-to-clipboard --save-dev
```

[Yarn](https://yarnpkg.com/package/typedoc-plugin-copy-code-to-clipboard):

```sh
yarn add typedoc-plugin-copy-code-to-clipboard --dev
```

TypeDoc automatically detected installed plugins. This plugin requires TypeDoc version ^0.23.x.

## Configuration

Add the plugin to [`typedoc.json`](https://typedoc.org/guides/options/):

```json
{
  "entryPoints": ["src"],
  "plugin": ["typedoc-plugin-copy-code-to-clipboard"]
}
```

Or specify the plugin when running the CLI command:

```sh
npx typedoc src --plugin typedoc-plugin-copy-code-to-clipboard
```

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/remarkablemark/typedoc-plugin-copy-code-to-clipboard/blob/master/LICENSE)
