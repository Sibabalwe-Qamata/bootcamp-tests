describe('The regCheck function' , function(){
    it('The function should return true if the registrationNumber passed is the same as the Location indicator passed' , function(){
        
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
        
        assert.equal(regCheck('DV 23 NB MP', 'MP'),true);
        
        

    });
    
    
    it('The function should return false if the registrationNumber passed is not the same as the Location indicator passed' , function(){
        
        assert.equal(regCheck('DV 23 NB 1010', 'NZ'),false);

    });
    
    
     it('The function should returns false if the registrationNumber passed is not the same as the Location indicator passed (i.e An empty string has been passed)' , function(){
        
        assert.equal(regCheck('DV 23 NB GP', ' '),false);

    });
    
    it('The function should returns false if the registrationNumber passed is not the same as the Location indicator passed (i.e A number has been passed as a string, without a location Indicator.)' , function(){
        
        assert.equal(regCheck('DK 85 NB GP', ' 2000 '),false);

    });

});