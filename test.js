'use strict';

require('mocha');
const assert = require('assert');
const arePasswordEqual = require('./');

describe('arePasswordsEqual', function() {
    it('should return true if passwords are equal:', function() {
        assert(arePasswordEqual('password', 'password'));
        assert(arePasswordEqual('test_password', 'test_password'));
        assert(arePasswordEqual('another#password', 'another#password'));
    });

    it('should return false if passwords are not equal::', function() {
        assert(!arePasswordEqual('password', 'wrong_passowrd'));
        assert(!arePasswordEqual('pasword', 'password'));
        assert(!arePasswordEqual('p4asword', 'password'));
    });

    it('should throw an error when an invalid value is passed', function() {
        assert.throws(() => arePasswordEqual(), /You should provide correct password, function accepts only strings/);
        assert.throws(() => arePasswordEqual("password", 4), /You should provide correct password, function accepts only strings/);
        assert.throws(() => arePasswordEqual(7, "pasword"), /You should provide correct password, function accepts only strings/);
    });
});
