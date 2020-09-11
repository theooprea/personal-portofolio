/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // code to modify the interval of the carousel as well as button to stop and start the carousel
    // and code to open the modals with the help of jquery
    $(document).ready(function() {
      alert("ce pla mea")
      $('#carousel-id').carousel({ interval: 1000 });
      $('#carousel-id').carousel('cycle');
    });
    $('#carouselButton').on('click touch', function() {
        if($("#carouselButton").children('span').hasClass('fa-pause')) {
          alert("s-o oprit");
          $('#carousel-id').carousel('pause');
          $("#carouselButton").children('span').removeClass('fa-pause');
          $("#carouselButton").children('span').addClass('fa-play');
        }
        else {
          alert("s-o pornit iara");
          $('#carousel-id').carousel('cycle');
          $("#carouselButton").children('span').removeClass('fa-play');
          $("#carouselButton").children('span').addClass('fa-pause');
        }
    });
    $("#modal1").click(function() {
        $("#portfolioModal1").modal('toggle');
    });
    $("#modal2").click(function() {
      $("#portfolioModal2").modal('toggle');
    });
    $("#modal3").click(function() {
      $("#portfolioModal3").modal('toggle');
    });
    $("#modal4").click(function() {
      $("#portfolioModal4").modal('toggle');
    });
    $("#modal5").click(function() {
      $("#portfolioModal5").modal('toggle');
    });
    $("#modal6").click(function() {
      $("#portfolioModal6").modal('toggle');
    });

    // hides the caption if the width has a certain value
    $(window).on('resize', function () {
      if($(window).width() <= 576) {
        $(".carousel .caption").removeClass('carousel-caption').addClass('hidden'); 
        $("#out-header").removeClass('hidden');
        var currentIndex = $('div.active').index() + 1;
        if(currentIndex == 1) {
          $("#out-caption-1").removeClass('hidden');
        }
        else if(currentIndex == 2) {
          $("#out-caption-2").removeClass('hidden');
        }
        else if(currentIndex == 3) {
          $("#out-caption-3").removeClass('hidden');
        }
        else if(currentIndex == 4) {
          $("#out-caption-4").removeClass('hidden');
        }
        else {
          $("#out-caption-5").removeClass('hidden');
        }
      }
      else{
        $(".carousel .caption").removeClass('hidden').addClass('carousel-caption');
        $("#out-header").addClass('hidden');
        $("#out-caption-1").addClass('hidden');
        $("#out-caption-2").addClass('hidden');
        $("#out-caption-3").addClass('hidden');
        $("#out-caption-4").addClass('hidden');
        $("#out-caption-5").addClass('hidden');
      }
    });

    if($(window).width() <= 576) {
      $(".carousel .caption").removeClass('carousel-caption').addClass('hidden');
      $("#out-header").removeClass('hidden');
      $("#out-caption-2").addClass('hidden');
      $("#out-caption-3").addClass('hidden');
      $("#out-caption-4").addClass('hidden');
      $("#out-caption-5").addClass('hidden');
    }
    else{
      $(".carousel .caption").removeClass('hidden').addClass('carousel-caption');
      $("#out-header").addClass('hidden');
      $("#out-caption-1").addClass('hidden');
      $("#out-caption-2").addClass('hidden');
      $("#out-caption-3").addClass('hidden');
      $("#out-caption-4").addClass('hidden');
      $("#out-caption-5").addClass('hidden');
    }

    $("#carousel-id").on('slid.bs.carousel', function() {
      if($(window).width() <= 576) {
        $("#out-caption-1").addClass('hidden');
        $("#out-caption-2").addClass('hidden');
        $("#out-caption-3").addClass('hidden');
        $("#out-caption-4").addClass('hidden');
        $("#out-caption-5").addClass('hidden');
        var currentIndex = $('div.active').index() + 1;
        if(currentIndex == 1) {
          $("#out-caption-1").removeClass('hidden');
        }
        else if(currentIndex == 2) {
          $("#out-caption-2").removeClass('hidden');
        }
        else if(currentIndex == 3) {
          $("#out-caption-3").removeClass('hidden');
        }
        else if(currentIndex == 4) {
          $("#out-caption-4").removeClass('hidden');
        }
        else {
          $("#out-caption-5").removeClass('hidden');
        }
      }
    });

  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  