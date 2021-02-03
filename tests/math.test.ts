import { add } from './math';

import * as mocha from 'mocha';
import * as chai from 'chai';
import { should } from 'chai';

const expect = chai.expect;

// this describe func is one test
describe('My math library', () => {
    it('should be able to add things correctly', () => {
        expect(add(3, 4)).to.equal(7);
    });

    // in ES5,
    /*
    var should = require('chai').should()
    , pritz = 4;
    pritz.should.equal(add(3, 1));
    */

    var assert = require('chai').assert, puri = 22
    assert.typeOf(puri, 'number');

    it('assert add things correctly', () => {
        assert.equal(add(893, 931), 1824);
    })
});