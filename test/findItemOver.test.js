describe('The findItemOver function' , function(){
    it('It should return products that have quantity higher than the threshold given.' , function(){
             assert.equal(findItemsOver(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],20),2);
        
    assert.equal(findItemsOver(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),1);
        
        
    });
    
    
    
    
    it('It should return false since the returned products that have quantity higher than the threshold given is incorrect.' , function(){
        
        assert.notDeepEqual(findItemsOver(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),10);
        assert.notDeepEqual(findItemsOver(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),0);

    });

});