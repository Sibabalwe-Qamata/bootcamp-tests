describe('The totalPhoneBill function' , function(){
    it('It should return the total phone bill for the given string.' , function(){
        
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
        
      

    });
    
    
    it('It should return false since the returned total phone bill is incorrect for the given strings.' , function(){
        
      assert.notDeepEqual(totalPhoneBill('call, sms, call, sms, sms'),'R10.00');
      assert.notDeepEqual(totalPhoneBill('call, sms, call, sms, sms'),'  ');


    });

});