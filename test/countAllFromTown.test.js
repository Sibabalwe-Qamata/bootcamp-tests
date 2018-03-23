describe('The countAllFromTown function' , function(){
    it(' Expected to return all the registration numbers in the string that is for that town, which is correct given the input value.', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);


    });
    
    
      it('Expected result is not deeply equal to the Input value (i.e There might be more or less registration numbers that are from town).' , function(){
        
        assert.notDeepEqual(countAllFromTown("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),1);
        assert.notDeepEqual(countAllFromTown("CJ 345 123","CK 345","CJ 123"),100);

    });

});