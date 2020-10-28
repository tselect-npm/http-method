# HTTPMethod

[![npm](https://img.shields.io/npm/v/@bluejay/http-method.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/http-method)
 [![npm](https://img.shields.io/npm/dm/@bluejay/http-method.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/http-method)
[![npm](https://img.shields.io/npm/l/@bluejay/http-method.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/http-method)

## Requirements

- `node >= 8.6`, tested with:
 - `node@8.6.0`
 - `node@12.8.1`
- `typescript >= 4.0`, tested with:
 - `typescript@4.0.2`

## Installation

`npm i @bluejay/http-method [--save]`

## Usage

```typescript
import { HTTPMethod, isHTTPMethod } from '@bluejay/http-method';

HTTPMethod.GET; // get
isHTTPMethod(HTTPMethod.GET); // true
```

## Documentation

See [Github Pages](https://bluebirds-blue-jay.github.io/http-method/).
