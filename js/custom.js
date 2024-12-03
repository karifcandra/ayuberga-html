$(document).ready(function(){
	$(".accordion > a").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).next().slideToggle();
	})
	$('.home-promo ul').bxSlider({
		pager: false,
		controls:false,
		auto: true
	});
	$('.home-slides ul').bxSlider({
		slideWidth: 500,
	      minSlides: 2, 
	      maxSlides: 4,
	      slideMargin: 20,
	      pager:false,
	      nextText: "",
	      prevText:""
	});
	$(".nav a").click(function(e){
		e.preventDefault();
		var link = $(this).attr("href");
		$(".nav a").removeClass("active");
		$(this).addClass("active");
		$(".form-area").removeClass("active");
		$(link).addClass("active")

	})
	$(".user-trigger").click(function(e){
		e.preventDefault();
		$(".user-dropdown").fadeToggle(); 
	})
	$(".sub-header a").click(function(e) {
		e.preventDefault();
		var link = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(link).offset().top},
        '500');
});
});