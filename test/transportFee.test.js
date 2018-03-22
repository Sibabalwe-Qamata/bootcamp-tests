
describe('The transportFee function' , function(){
    it('It should returns the right price based on the shift you are working.' , function(){
        
        assert.equal(transportFee("morning"),'R20');
           assert.equal(transportFee("afternoon"),'R10');
        
    });
    
    
    it('It should return false since the amount entered is incorrect.' , function(){
        
        assert.notDeepEqual(transportFee("Evening"),'R25');
        assert.notDeepEqual(transportFee("afternoon"),'R30');

    });

});