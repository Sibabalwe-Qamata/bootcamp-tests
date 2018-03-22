describe('The countRegNumber function' , function(){
    it('It should return true if the number of registration plates is the same as the number passed as the parameter' , function(){
        
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328 ,CK 812328'),4);

    });
    
      it('Expected to throw an error, since the expected result is not the same as the input.' , function(){
        
         
        assert.notDeepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),10);
          
        assert.notDeepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),-1);

    
    });

});