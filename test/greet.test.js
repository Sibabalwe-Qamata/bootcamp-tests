
describe('The greet function' , function(){
    it('Expected to greet with the proper name (i.e "Hello, Mlu")' , function(){
        
        assert.equal(greet('Mlu'),'Hello, Mlu');
        
    });
    
     it('Expected to throw an error, since the expected result is not the same as the input.' , function(){
        
         
        assert.notDeepEqual(greet('Mlu'), 'Hello, siba');

    
    });

});