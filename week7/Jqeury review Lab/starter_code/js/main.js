$(document).on('ready', function(){
$('#submit-btn').click(handleCityType);
});
/*$('#submit-btn').on('submit', function(event){
    var city= $(#city-type).val();
    if(city=='nyc'|| city== 'New york'){
      $('body').attr('class', 'nyc')

    }

})







*/
function handleCityType(event){
  console.log("is this working");
  event.preventDefault();
  var city = $('#city-type').val();
  if(city == 'nyc'|| city=='New York'){
    $('body').attr('class','nyc');
  }
  else if(city == 'sf'){
    $('body').attr('class','sf');
  }
  else if(city == 'la'){
    $('body').attr('class','la');
  }
  else if(city == 'austin'){
    $('body').attr('class','austin');
  }
  else if(city == 'sydney'){
    $('body').attr('class','sydney');
  }
  else{
    $('city-type').attr('class', 'body');
  }
}



  