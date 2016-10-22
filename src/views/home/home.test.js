/**
 *
 * (c) 2016 Janne Hämäläinen
 *
 */

import { algCheckDoubleQuotes,algSeekAndReplace } from './algorithm';
import { assert } from 'chai';
import dict from './dict.json';

let dictionary;

describe('Algorithm unit', function() {

    beforeEach(()=>{
        dictionary = Object.assign({},dict.items);
    });

    it('should pass test if input has double quotes', ()=> {
        let input='""';
        let result=algCheckDoubleQuotes(input);
        assert.equal(result, true);
    });

    it('should return false if input has not double quotes', ()=> {
        let input='poo';
        let result=algCheckDoubleQuotes(input);
        assert.equal(result, false);
    });


    it('should check that input is """', ()=> {
        let input='"""';
        let result=algSeekAndReplace(input,dictionary);
        assert.equal(result, '"""');
    });

    it('should check that input is name', ()=> {
        let input='"name"';
        let result=algSeekAndReplace(input,dictionary);
        assert.equal(result, '"name"');
    });

    it('should return John Doe', ()=> {
        let input='"$name$"';
        let result=algSeekAndReplace(input,dictionary);
        assert.equal(result, '"John Doe"');
    });

    it('should return temporary', ()=> {
        let input='"$temp$"';
        let result=algSeekAndReplace(input,dictionary);
        assert.equal(result, '"temporary"');
    });

    it('should return unknown "tag" as it is', ()=> {
        let input='"$tempo$"';
        let result=algSeekAndReplace(input,dictionary);
        assert.equal(result, input);
    });


});

