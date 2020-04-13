// JavaScript Document


//mobile gnb
$(document).ready(function(){

  $(window).load( function() {
  
    $(".cate-btn, .panel-overlay, .close-btn").click( function() {
      $(".cate-btn, .panel-overlay, .panel").toggleClass("active");

      if ($(".panel-overlay").hasClass("active")) {
        $(".panel-overlay").fadeIn();
      } else {
        $(".panel-overlay").fadeOut();
      }
	  
	  
    });

  });

})

//mobile gnb effect
$(function() {
	  $(' .nav_title').click(function() {
		  var obj = $(this).next('.m_sub_list');
		  obj.slideToggle();
		  $('.m_sub_list').not(obj).slideUp();
	  });
  });


$(document).ready(function () {
  $('.list-open-tit').on('click', function(event){
 	event.preventDefault();

    	var accordion = $(this);
    	var accordionContent = accordion.next('.list-open-box').css('background','#f9f9f9');

    	accordion.toggleClass("open");
    	accordionContent.slideToggle();
		
		if (accordion.hasClass("open")) {
    		accordionToggleIcon.html("+");
    	} else {
    		accordionToggleIcon.html("-");
    	}

   });
});




//header_scroll//
$(document).ready(function(){ 
    $(window).scroll(function(){ 
       if($(this).scrollTop() > 90){ 
          $(".active_header").addClass("fixed");
          }else{ 
          $(".active_header").removeClass("fixed");
       } 
    }) 

 }); 
 

//rolling_news
$(function()
{
    var ticker = function()
    {
        setTimeout(function(){
            $('.rolling  li:first').animate( {marginTop: '-28px'}, 300, function()
            {
                $(this).detach().appendTo('ul.rolling ').removeAttr('style');
            });
            ticker();
        }, 3000);
    };
    ticker();
});
