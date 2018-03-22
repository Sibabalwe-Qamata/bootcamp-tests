describe('The findItemOver20 function' , function(){
    it('It should return products that have quantity higher than the threshold given.', function(){
  
    assert.equal(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],20),2);
    });
    
    
    
    
    it('It should return false since the returned products that have quantity higher than the threshold given is incorrect.' , function(){
        
        assert.notDeepEqual(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),1000);
        assert.notDeepEqual(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),-8);

    });
});