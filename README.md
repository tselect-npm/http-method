# @tselect/http-method

[![npm](https://img.shields.io/npm/v/@tselect/http-method.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/http-method)
[![npm](https://img.shields.io/npm/dm/@tselect/http-method.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/http-method)
[![CI](https://img.shields.io/github/actions/workflow/status/tselect-npm/http-method/ci.yml?branch=main&style=flat-square)](https://github.com/tselect-npm/http-method/actions/workflows/ci.yml)
[![coverage](https://img.shields.io/coverallsCoverage/github/tselect-npm/http-method?branch=main&style=flat-square)](https://coveralls.io/github/tselect-npm/http-method?branch=main)
[![license](https://img.shields.io/npm/l/@tselect/http-method.svg?style=flat-square)](./LICENSE)

HTTP methods related enums and utilities.

Zero runtime dependencies. Ships both ESM and CommonJS builds, with TypeScript types for each.

## Requirements

**Node 22 or newer** (`engines.node` is `>=22`) — every line still receiving security support. Each release is tested on 22, 24 and 26; the declared floor is the lowest version CI actually runs, not a guess.

## Installation

```bash
npm i @tselect/http-method
```

```bash
pnpm add @tselect/http-method
```

## Usage

```typescript
import { HTTPMethod, isHTTPMethod } from '@tselect/http-method';

HTTPMethod.GET; // 'get'
isHTTPMethod(HTTPMethod.GET); // true
```

Namespace imports and `require()` both work:

```typescript
import * as HTTPMethodUtils from '@tselect/http-method';
```

```javascript
const { HTTPMethod, isHTTPMethod } = require('@tselect/http-method');
```

## API

### `HTTPMethod`

A string enum of the supported HTTP methods. Every member's value is lower case.

```typescript
HTTPMethod.GET; // 'get'
HTTPMethod.POST; // 'post'
HTTPMethod.PATCH; // 'patch'
HTTPMethod.DELETE; // 'delete'
HTTPMethod.HEAD; // 'head'
HTTPMethod.OPTIONS; // 'options'
HTTPMethod.PUT; // 'put'
```

### `THTTPMethod`

A union of every method name in both lower and constant case — `'get' | 'post' | … | 'GET' | 'POST' | …`. Every function below accepts it, so the enum, a lower case literal and a constant case literal are all valid arguments.

```typescript
import type { THTTPMethod } from '@tselect/http-method';

const method: THTTPMethod = 'PATCH';
```

### `isHTTPMethod(candidate: string): boolean`

Returns whether an arbitrary string names an HTTP method. Case-insensitive, and unlike the functions below it accepts any `string`, so it is the one to reach for when validating untrusted input.

```typescript
isHTTPMethod('get'); // true
isHTTPMethod('GET'); // true
isHTTPMethod('gEt'); // true
isHTTPMethod('foo'); // false
```

### `toLowerCase(method: THTTPMethod): THTTPMethod`

Returns the lower case form, which is the form the `HTTPMethod` enum uses.

```typescript
toLowerCase('GET'); // 'get'
toLowerCase('get'); // 'get'
```

### `toConstantCase(method: THTTPMethod): THTTPMethod`

Returns the upper case form, as used in most HTTP tooling and in the `Allow` header.

```typescript
toConstantCase('get'); // 'GET'
toConstantCase('GET'); // 'GET'
```

### `toPascalCase(method: THTTPMethod): string`

Returns the method with its first character upper cased and the rest lower cased. Useful for building method-derived identifiers such as `onGet` or `handlePost`.

```typescript
toPascalCase('get'); // 'Get'
toPascalCase('POST'); // 'Post'
```

## License

[MIT](./LICENSE) © Sylvain Estevez
