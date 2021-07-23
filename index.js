/*!
 * are-passwords-equal <https://github.com/tomiho19/arepasswordsequal>
 *
 * Copyright (c) 2021-2021, Oleksii Sydorenko.
 * Released under the MIT License.
 */

'use strict';

module.exports = function arePasswordsEqual(password, confirmPassword) {
    if(typeof password !== 'string' || typeof confirmPassword !== 'string') {
        throw new Error('You should provide correct password, function accepts only strings');
    }

    return password === confirmPassword;
}
