function sameWeekday(date1, date2){
  //Correcting the date format
  var d2 = new Date(date2);
  var d1 = new Date(date1);
  
  var d_1 = d1.getDay();//
  var d_2 = d2.getDay();
  
  var weekday =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	if(d_1 === d_2){
      	return true;
       
       }
  else{
  		return false;
  }

  
   
}
