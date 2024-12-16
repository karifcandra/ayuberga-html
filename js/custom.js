$(document).ready(function(){

	$(".select2").select2();
	$("#filters .close").click(function(e){
		e.preventDefault();
		$("#filters").animate({"right":"-800px"}, "fast");
	})
	$(".listing .head .filters").click(function(e){
		e.preventDefault();
		$("#filters").animate({"right":"0px"}, "fast");
	})
	$(".accordion > a").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).next().slideToggle();
	})
	$(".pax > a").click(function(e){
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
	$('input[type="number"]').niceNumber({

  // auto resize the number input
  autoSize: false,

  // the number of extra character
  autoSizeBuffer: 1,

  // custom button text
  buttonDecrement: '-',
  buttonIncrement: "+",

  // 'around', 'left', or 'right'
  buttonPosition: 'around'
  
});   

});
$(window).scroll(function(){
        if ($(window).scrollTop() > 500){
            $(".detail-listing .content .right").addClass("active");
        }
        else{
        	$(".detail-listing .content .right").removeClass("active");
        }
    });
$(window).scroll(function(){
        if ($(window).scrollTop() > 400){
            $("#booking .main-booking .right .booking-summary").addClass("active");
        }
        else{
        	$("#booking .main-booking .right .booking-summary").removeClass("active");
        }
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

  $(".lightbox .close").click(function() {
    $(".lightbox").fadeOut(300);
    $(".lightbox h1").remove();
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
  $(".dropdown-btn").click(function(e){
  	e.preventDefault();
  	$(this).next().slideToggle();
  })


/*====== Quantity ========*/
$(document).on('click', '.qtyDec, .qtyInc', function () {
    var $button = $(this);
    numberButtonFunc($button);
});

function numberButtonFunc($button) {
    var oldValue = $button.parent().find("input").val();
    var total = 0;
    $('input[type="text"]').each(function () {
        total += parseInt($(this).val());
    });
    var newVal;
    if ($button.hasClass('qtyInc')) {
        newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find("input").val(newVal).trigger('change');

    updateGuestTotal();
}

function updateGuestTotal() {
    var total = 0;
    $('[data-total-input]').each(function () {
        var value = parseInt($(this).val());
        if (!isNaN(value)) {
            total += value;
        }
    });
    $('[data-total-output]').text(total);
}

$('.gty-container').each(function () {
    var parent = $(this);
    // guest quantity number
    $('input[name="guest_number"]', parent).change(function () {
        var guests = parseInt($(this).val());
        var html = guests;
        if (typeof guests == 'number') {
            if (guests < 2) {
                html = guests + ' ' + $('.guest', parent).data('text');
            } else {
                html = guests + ' ' + $('.guest', parent).data('text-multi');
            }
        }
        $('.guest', parent).html(html);
    });
    $('input[name="guest_number"]', parent).trigger('change');

    // room quantity number
    $('input[name="room_number"]', parent).change(function () {
        var rooms = parseInt($(this).val());
        var html = rooms;
        if (typeof rooms == 'number') {
            if (rooms < 2) {
                html = rooms + ' ' + $('.room', parent).data('text');
            } else {
                html = rooms + ' ' + $('.room', parent).data('text-multi');
            }
        }
        $('.room', parent).html(html);
    });
    $('input[name="room_number"]', parent).trigger('change');


});

// Attach change event listeners to all total quantity input fields
$('[data-total-input]').on('change', function () {
    updateGuestTotal();
});

// Initial call to set the total
updateGuestTotal();

$(".toggle-password").click(function() {

	  $(this).toggleClass("icon-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});
});

