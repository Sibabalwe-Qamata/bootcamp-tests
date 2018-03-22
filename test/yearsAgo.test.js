describe('The yearsAgo function' , function(){
    it('It should return the number of Years ago, given a year in the past.' , function(){
        
        assert.equal(yearsAgo(1976),42);
        
        assert.equal(yearsAgo(2017),1);
        
        

    });
    
    
     it('It should return false since the number of Years ago is not correct, given a year in the past.' , function(){
        
        assert.notDeepEqual(yearsAgo(2017),5);
        assert.notDeepEqual(yearsAgo(1996),23);

    });
    
});