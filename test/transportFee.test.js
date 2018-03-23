
describe('The transportFee function' , function(){
    it('It should return the right price based on the shift worked.' , function(){
        
        assert.equal(transportFee("morning"),'R20');
           assert.equal(transportFee("afternoon"),'R10');
        
    });
    
    
    it('Expected result is not deeply equal to the amount entered (i.e Amount entered is not the correct shift amount allocated ).' , function(){
        
        assert.notDeepEqual(transportFee("Evening"),'R25');
        assert.notDeepEqual(transportFee("afternoon"),'R30');

    });

});