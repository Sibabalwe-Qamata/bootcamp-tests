describe('The countAllFromTown function' , function(){
    it(' It should return all the registration numbers in the string that is for that town, which is correct.', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);


    });
    
    
      it('It should return false since the number of registration numbers is not correct.' , function(){
        
        assert.notDeepEqual(countAllFromTown("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),1);
        assert.notDeepEqual(countAllFromTown("CJ 345 123","CK 345","CJ 123"),100);

    });

});