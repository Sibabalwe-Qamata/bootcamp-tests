
describe('The greet function' , function(){
    it('Expected to greet with the proper name (i.e "Hello, Mlu")' , function(){
        
        assert.equal(greet('Mlu'),'Hello, Mlu');
        
    });
    
     it('Expected output is not deeply equal to the input variable.' , function(){
        
         
        assert.notDeepEqual(greet('Mlu'), 'Hello, siba');

    
    });

});