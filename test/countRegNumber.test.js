describe('The countRegNumber function' , function(){
    it('The expected result should return true if the number of registration plates is the same as the number passed as the parameter (i.e There is exactly the same number of registration number plates as the inputed value.)' , function(){
        
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328 ,CK 812328'),4);

    });
    
      it('The expected result is not  deeply equal to the input value (i.e The might be more ore less Registration numbers in the parameter given).' , function(){
        
         
        assert.notDeepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),10);
          
        assert.notDeepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),-1);

    
    });

});