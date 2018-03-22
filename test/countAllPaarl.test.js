describe('The countAllPaarl function' , function(){
    it('It should return the number of Paarl registration number plates.' , function(){
        
       assert.equal(countAllPaarl("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),1);
        assert.equal(countAllPaarl("CJ 345 123","CK 345","CJ 123"),1);
        
         assert.equal(countAllPaarl("CJ 345 123","CK 345","CJ 123"),1);
        

    });

    
    it('It should return false since the number of Paarl registration is not correct.' , function(){
        
        assert.notDeepEqual(countAllPaarl("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),5);
        assert.notDeepEqual(countAllPaarl("CJ 345 123","CK 345","CJ 123"),23);

    });
    
});

