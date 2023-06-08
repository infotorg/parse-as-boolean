# parse-as-boolean

Parse a value as a boolean

Values that are considered truthy:

- `true`
- `'true'`
- `'1'`
- `'yes'`
- `'on'`
- `'enabled'`

Values can be parsed as case-sensitive by setting the second argument to `true`.

## Installation

```bash
$ npm install @infotorg/parse-as-boolean
```

## Usage

```javascript
import { parseAsBoolean } from '@infotorg/parse-as-boolean';
// or for node.js
// const { parseAsBoolean } = require('@infotorg/parse-as-boolean');

// Truthy – Case-insensitive
parseAsBoolean(true); // true
parseAsBoolean('true'); // true
parseAsBoolean('TRUE'); // true
parseAsBoolean('1'); // true
parseAsBoolean('yes'); // true
parseAsBoolean('YES'); // true
parseAsBoolean('enabled'); // true
parseAsBoolean('ENABLED'); // true
parseAsBoolean('on'); // true
parseAsBoolean('ON'); // true

// Falsey – Case-insensitive
parseAsBoolean(''); // false
parseAsBoolean(false); // false
parseAsBoolean('false'); // false
parseAsBoolean(0); // false
parseAsBoolean(0.5); // false
parseAsBoolean('0'); // false
parseAsBoolean('no'); // false
parseAsBoolean('on'); // true
parseAsBoolean('off'); // false
parseAsBoolean('disabled'); // false
parseAsBoolean({}); // false

// Truthy – Case-sensitive
parseAsBoolean(true, true); // true
parseAsBoolean('true', true); // true
parseAsBoolean('1', true); // true
parseAsBoolean('yes', true); // true
parseAsBoolean('enabled', true); // true
parseAsBoolean('on', true); // true

// Falsey – Case-sensitive
parseAsBoolean('TRUE', true); // false
parseAsBoolean('YES', true); // false
parseAsBoolean('false', true); // false
parseAsBoolean('ENABLED', true); // false
parseAsBoolean('ON', true); // false
```

## Tests

Tests are written with `jest`. They can be run with `npm`:

```
npm run test
```

##### LICENSE: MIT

##### AUTHOR: [Volodymyr Chumak](https://github.com/coderua)
