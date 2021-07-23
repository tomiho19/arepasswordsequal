# are-passwords-equal

![Build Status](https://travis-ci.org/tomiho19/arepasswordsequal.svg?branch=main)

Returns true if passwords are equal, otherwise returns false.

## Install
Install with npm:
```
$ npm install --save arepasswordsequal
```
## Usage
Works only with strings:
```
const arePasswordsEqual = require('arepasswordsequal'); // or import arePasswordsEqual from 'arepasswordsequal';

console.log(arePasswordsEqual('password', 'another_passowrd')); //=> false
console.log(arePasswordsEqual('password', 'passowrd')); //=> true
```

## Testing
Run test:
```
npm run test
```

## Author
Oleksii Sydorenko:
- [Linkedin](https://www.linkedin.com/in/oleksii-sydorenko-4a0a7a151/)
- [Github](https://github.com/tomiho19)

## License
Copyright © 2018, [Oleksii Sydorenko](https://github.com/tomiho19).
Released under the [MIT License](LICENSE).
