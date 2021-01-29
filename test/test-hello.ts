import hello from './../src/hello';
import { expect } from 'chai';
// if I use the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Hello function', () => {
    it('shoud return hello world', () => {
        const result = hello();
        expect(result).to.equal('Hello World');
    });
});