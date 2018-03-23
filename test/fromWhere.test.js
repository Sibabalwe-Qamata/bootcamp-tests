describe('The fromWhere function' , function(){
    it(' The function takes a car registration number as a parameter and returns the town the car is from. ' , function(){
        
        assert.equal(fromWhere('CY'),"Bellville");
        assert.equal(fromWhere('CA'),"Cape Town");
        assert.equal(fromWhere('CJ'),"Paarl");
        
        assert.equal(fromWhere('CC'),"Some other place!");

    });
      it('Expected result is not deeply equal to the input registration number plate. Hence the town will be returned as Unknown Town.' , function(){
        
        assert.notDeepEqual(fromWhere('XXX'),"Unknown Town");
        assert.notDeepEqual(fromWhere(' '),"Unknown Town");
    

    });

});