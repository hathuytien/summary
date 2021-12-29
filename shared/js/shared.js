$(document).ready(function () {
  $(".mobile-nav a[href^='#']").on("click", function () {
    $(".toggle-button").removeClass('active')
    $('body').removeClass('menu-open');
    $('body').css('position', 'static');
    //$(window).scrollTop(offsetY);
  })
});

$(document).ready(function () {
  if ($('.nav-fixed nav').length && $('.nav-fixed').attr('scroll-active') === "true"){ 
		$(document).on('scroll', onScroll)
		if ($(window).width() < 767) {
			$(document).on('scroll', onScroll2)
		} 
	}
    $(document).on('scroll', onScroll)
		if ($(window).width() < 767) {
			$(document).on('scroll', onScroll2)
		} 
	$( window ).resize(function() {
  $(document).on('scroll', onScroll)
		if ($(window).width() < 767) {
			$(document).on('scroll', onScroll2)
		}
});
$('.nav-fixed nav a[href*="#"]').on('click', function () {
	var e = $(this).attr('href')
	var h = $('.nav-fixed').outerHeight()
	var h_header = $('#header').outerHeight()
	var b = $(e).length ? $(e).offset().top : 0
	if($('.nav-fixed').hasClass("fixed")===false)
	{
		if(h_header==Math.round(b)){
			var h_header2 = $('#header').outerHeight()
			$('html, body').animate({
				scrollTop: (h_header + 1 - h)
			}, 500)
			$('html, body').animate({
				scrollTop: (h_header2 - h*2)
			}, 500)
		}
		else{
			$('html, body').animate({
				scrollTop: (b + 1 - h*2)
			}, 500)
		}
	}
	if($('.nav-fixed').hasClass("fixed")===true)
	{
		$('html, body').animate({
			scrollTop: (b + 1 - h)
		}, 500)
	}
	if ($(window).width() < 767) {
		$('html, body').animate({
			scrollTop: (b + 1)
		}, 500)
	} 
})
});
function onScroll() {
  var scroll = $(window).scrollTop()
  var header = $('.nav-fixed').outerHeight()
  $('.nav-fixed a[href^="#"]').each(function () {
    var el = $(this).attr('href')
    var offset = $(el).length ? $(el).offset().top : 0
    if ((scroll + header + 1) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
      $('.nav-fixed a').removeClass('active')
      $(this).addClass('active')
    }
  })
}

function onScroll2() {
  var scroll = $(window).scrollTop()
  //var header = $('.nav-fixed').outerHeight()
  $('.mobile-nav a[href^="#"]').each(function () {
    var el = $(this).attr('href')
    var offset = $(el).length ? $(el).offset().top : 0
    if ((scroll + 1) >= offset && ($(el).outerHeight() + offset) > (scroll)) {
      $('.mobile-nav a').removeClass('active')
      $(this).addClass('active')
    }
  })
}
