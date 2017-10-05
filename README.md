# HTTPMethod

## Requirements

- `node >= 7.10`
- `typescript >= 2.4`

## Installation

`npm i @bluejay/http-method [--save]`

## Usage

```typescript
import * as HTTPMethod from '@bluejay/http-method';

HTTPMethod.GET; // get
HTTPMethod.isHTTPMethod(HTTPMethod.GET); // true
```

Using the named export.

```typescript
import { HTTPMethod } from '@bluejay/http-method';

HTTPMethod.GET; // get
HTTPMethod.isHTTPMethod(HTTPMethod.GET); // true
```

Or directly.

```typescript
import { GET, isHTTPMethod } from '@bluejay/http-method';

isHTTPMethod(GET); // true
```

## Documentation

See [Github Pages](https://bluebirds-blue-jay.github.io/http-method/).
