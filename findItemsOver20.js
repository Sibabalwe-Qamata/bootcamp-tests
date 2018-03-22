function findItemsOver20(list){
  var fruits = [];
  for(var i=0; i<list.length; i++)
  {
    if(list[i].qty > 20 )
    {  	
      	fruits.push(list[i]);
    }
  } 
  return fruits.length;
}
