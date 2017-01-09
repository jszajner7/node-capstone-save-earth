console.log("Earth!");

  $(document).ready(function documentReadyCallback() {
      
    console.log('Your code is ready to run');
        
        
    $.get('/co2',null, function (resp) {
        console.log(resp); 
        
    });
    
    
    console.log('This code is about to run');
    
   

$.get('/green_house_gas',null, function (resp) {
         console.log(resp);
         
    });
    
      
      console.log('The last bit of code is about to run');
    

   $.get('/methane',null, function (resp) {
        console.log(resp);
        
        
         });
        
  });