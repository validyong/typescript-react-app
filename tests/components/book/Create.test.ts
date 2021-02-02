import { assert } from 'console';
import Create from '../../../src/components/book/Create';

describe('Create tests', () => { // the tests container
    const create = new Create(Create);
    it('checking create class', () => { // the single test

        assert(create); // check not null
    })

    // private methods don't have to been tested?
    // should i make public get methods for fields?
    it('processFormSubmission method test', () => {

    })

    it('handleInputChanges method test', () => {

    })

    it('render test', () => {
        
    })
})