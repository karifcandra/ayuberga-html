$(document).ready(function(){
	$(".accordion > a").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).next().slideToggle();
	})
	$(".share-trigger").click(function(e){
		e.preventDefault();
		$(".shares").fadeToggle();
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
$(window).load(function() {

  $("section img").click(function() {
    $(".lightbox").fadeIn(300);
    $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
    $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
    /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
    $("html").css("overflow", "hidden");
    if ($(this).is(":last-child")) {
      $(".arrowr").css("display", "none");
      $(".arrowl").css("display", "block");
    } else if ($(this).is(":first-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "none");
    } else {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    }
  });

  $(".close").click(function() {
    $(".lightbox").fadeOut(300);
    $("h1").remove();
    $(".lightbox img").remove();
    $("html").css("overflow", "auto");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    }
  });

  $(".arrowr").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var newImage = search.next().attr("src");
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");

    if (!search.next().is(":last-child")) {
      $(".arrowl").css("display", "block");
    } else {
      $(".arrowr").css("display", "none");
    }
  });

  $(".arrowl").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var newImage = search.prev().attr("src");
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");

    if (!search.prev().is(":first-child")) {
      $(".arrowr").css("display", "block");
    } else {
      $(".arrowl").css("display", "none");
    }
  });

});