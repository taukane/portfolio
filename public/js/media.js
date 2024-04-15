$(document).ready(function () {

$('#coda-slider-1').codaSlider();
  function unifyHeights() 
  {
    var maxHeight = 0;
    $('div.panel ').children('div').each(function(){
      var height = $(this).outerHeight();
      if ( height > maxHeight ) { maxHeight = height; }
    });
    $('div.innerDivs').css('height', maxHeight);
  }

$('.fechar').click(function(){			
$("#QuickView").css("display","none");
document.getElementById('works').innerHTML = '<h3 style="color:white;text-align:center;margin-top:40px">taukane@yahoo.com.br</h3>';
});


$('.xtrig').click(function(e) {
  $('[data-key="slider"]').slideDown(600);
  $('#QuickView').css("display","block");
  e.preventDefault();
});

$('.tauk').click(function() {
  $('html, body').animate({ scrollTop: $('[data-key="slider"]').offset().top },500);
  $('#QuickView').css("display","block");
});

$('#works a, #link, #coda-nav-left-1 a, #coda-nav-right-1 a').click(function(e){				  
$('html, body').animate({ scrollTop: $('.coda-slider').offset().top },500);
e.preventDefault();
});

$('#topo').click(function(e){				  
$('html, body').animate({ scrollTop: $('#page').offset().top },800);
e.preventDefault();
});

$('#topo-vai').click(function(e){				  
$('html, body').animate({ scrollTop: $('#page').offset().top },800);
e.preventDefault();
});


 $('body').keyup(function (event) {
    var direction = null;
    // handle cursor keys
    if (event.keyCode == 37) {
      // slide left
      direction = 'prev';
      $('html, body').animate({ scrollTop: $('.coda-slider').offset().top },1000);
    } else if (event.keyCode == 39) {
      // slide right
      direction = 'next';
      $('html, body').animate({ scrollTop: $('.coda-slider').offset().top },1000);
      $('#QuickView').css("display","block").css("height","auto").css("min-height","100%");
      $("#darkLayer").css("display","block");
    }
    else if (event.keyCode == 38) {
			
			$('html, body').animate({ scrollTop: $('.coda-slider').offset().left },1000);

	}
	else if (event.keyCode == 40) {
			
			$('html, body').animate({ scrollTop: $('#topo').offset().top },1000);

	}
	
	else if (event.keyCode == 27) {
			
			alert('taukane@yahoo.com.br');
			$("#darkLayer").css("display","none");

	}

    if (direction != null) {
      $('ul a.current').parent()[direction]().find('a').click();
    }
  
  });
  
  function reloadImg(id) {
   var obj = document.getElementById(id);
   var src = obj.src;
   var pos = src.indexOf('?');
   if (pos >= 0) {
      src = src.substr(0, pos);
   }
   var date = new Date();
   obj.src = src + '?v=' + date.getTime();
   return false;
}
   
});     