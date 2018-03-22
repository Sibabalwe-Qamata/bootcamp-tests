describe('The isFromBellville function' , function(){
    it('Expected to  return true for all number plates that they from Bellville' , function(){
        
        assert.equal(isFromBellville('CY 2014 P '),true);
        assert.equal(isFromBellville('CY 2015 Y'),true);
    });
    
    
     it('It should return false since the number plate is not from Bellville (i.e CZ is not equal to CY)' , function(){
        assert.equal(isFromBellville('CZ 2015 A'),false);

    });
    
     it('It should return false since the number plate is not from Bellville because of the spaces within the string' , function(){
          assert.equal(isFromBellville('C    Y 2015 Y'),false);

    });
    
    
     it('It should return false since there is no number plate passed into the function (i.e An empty string has been passed) ' , function(){
          assert.equal(isFromBellville(' '),false);

    });
    

});