$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });
}); 

$(document).ready(function() {
    var $make = $('#make'),
      $model = $('#model'),
      $options = $model.find('option');
  
    $make.on('change', function() {
      $model.html($options.filter('[value="' + this.value + '"]'));
      $model.trigger('change');
    }).trigger('change');

    let dateDropdown = document.getElementById('date-dropdown'); 
                           
    let currentYear = new Date().getFullYear();    
    let earliestYear = 1990;     
    while (currentYear >= earliestYear) {      
      let dateOption = document.createElement('option');          
      dateOption.text = currentYear;      
      dateOption.value = currentYear;        
      dateDropdown.add(dateOption);      
      currentYear -= 1;    
    }
  });