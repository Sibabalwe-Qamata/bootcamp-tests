function countAllPaarl(paarl){
	var b = paarl.split(", ");
  	var one = [];
 for(var j in b){
   if(b[j].startsWith("CJ")){   
     one.push(b[j]);}
  }  
  return one.length;
}
assert.equal(countAllPaarl("CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"),1);
assert.equal(countAllPaarl("CJ 345 123","CK 345","CJ 123"),1);
