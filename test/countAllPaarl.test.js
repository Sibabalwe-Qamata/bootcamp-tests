describe('The countAllPaarl function' , function(){
    it('Expected to return the number of Paarl registration number plates, given the inputed value.' , function(){
        
       assert.equal(countAllPaarl("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),1);
        assert.equal(countAllPaarl("CJ 345 123","CK 345","CJ 123"),1);
        
         assert.equal(countAllPaarl("CJ 345 123","CK 345","CJ 123"),1);
        

    });

    
    it('Expected result is not deeply equal to the Inputed value. (i.e The might be more or less Paarl registration plates in the given string)' , function(){
        
        assert.notDeepEqual(countAllPaarl("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),5);
        assert.notDeepEqual(countAllPaarl("CJ 345 123","CK 345","CJ 123"),23);

    });
    
});

