describe('factorial tests', function(){
   'use strict';

    it('0! should return 1', function(){
       expect(factorial(0)).toBe(1);
    });

    it('5! should return 120', function(){
       expect(factorial(5)).toEqual(120);
    });

    it('should throw exception for negative numbers', function(){
        expect(function(){
            factorial(-1);
        }).toThrow(new Error('incorrect argument'));
    });

    it('should throw exception for not-a-number args', function(){
        expect(function(){
            factorial('not-a-number');
        }).toThrow(new Error('incorrect argument'));
    });

});