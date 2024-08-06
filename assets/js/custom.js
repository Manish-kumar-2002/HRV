$(window).on("load", function () {
  $('body').attr("style", "-moz-osx-font-smoothing:grayscale;")
  setTimeout(() => {
    $('body').removeAttr('style');
  }, 5000);
  $(".hamburger").click(function () {
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".navbar").css("display", "flex");
      $("body").css("overflow", "hidden");
    } else {
      $(".navbar").css("display", "none");
      $("body").css("overflow", "visible");
    }
  });
  $('.letter_image').addClass("letter_down")
  //text-animation
  setInterval(function () {
    $(".text-anim").addClass("animate");
  }, 2000);

  $(".accordion-list > li > .answer").hide();
  $(".accordion-list > li:first-of-type").addClass("active");
  $(".accordion-list > li.active .answer").slideDown();
  $(".accordion-list h3").click(function () { 
    if ($(this).parent("li").hasClass("active")) {
      $(this).parent("li").removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).parent("li").addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  let wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  $(".icon-arrow").click(function () {
    $(this).parent("a").next(".sub-menu").slideToggle();
  });

  if ($(".slider-one").length) {
    $(".slider-one").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".crousel-slider").length){
    $(".crousel-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      // autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  
  if ($(".news-crousel").length) {
    if($(window).width() > 767){ 
      createDiv()
    }
    else{
      $('.empty_box').remove();
    }
    $(window).on('resize',function(){
      if($(window).width() > 767){ 
        createDiv()
      }
      else{
        $('.empty_box').remove();
      }
    })
    $(".news-crousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      pauseOnHover:false,
      mobileFirst:true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
    });


  }
  function createDiv() {
    $('.news-content:even').after('<div class="empty_box"></div>');
  } 
  if ($(".news-slider-wrapper").length) {
    $(".news-slider-wrapper").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  $('.element-list li').hover(function(){
    let b = $(this).index();
    console.log(b)
    $('.zoom-effect .round').eq(b).addClass('zoom');
  },
  function(){
    $('.zoom-effect .round').removeClass('zoom');
  })

  $('.zoom-effect .round').hover(function(){
    let a = $(this).index();
    console.log(a)
    $('.element-list li').eq(a).addClass('zoom');
  },
  function(){
    $('.element-list li').removeClass('zoom');
  })
});


// manish code
$(".open-popup").click(function () {
  $("html").css("overflow", "hidden");
  $(".popup-wrap-block").css("display", "block");
  $(".bg-black").css("display", "block");
});
$("#open-popup-2").click(function () {
  $("html").css("overflow", "auto");
  $(".popup-wrap-block").css("display", "none");
  $(".bg-black").css("display", "none");
});
$(".bg-black").click(function () {
  $("html").css("overflow", "auto");
  $(".popup-wrap-block").css("display", "none");
  $(this).css("display", "none");
});



