"use strict"; // ES5

(function() { //область видимости

  function nojsreplace() {
    if (document.body.className == "no-js") {
      document.body.classList.remove("no-js");
    }
  }
  document.addEventListener("DOMContentLoaded", nojsreplace);

  //owlCarousel
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      center: true,
      nav: true,
      navigation: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1700,
      navSpeed: 1700,
      responsive: {
        0: {
          items: 1,
          nav: true
        }
      },
      navText: ""
    });

    //
    // $('.prices__btn').on("hover", function() {
    //   $(this).css({
    //     "background-color": "#49cbcd"
    //   });
    // }, function() {
    //     $(this).css({
    //       "background-color": "#788492"
    //     });
    // });
  });

  // validate form
  $('.contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: 2
      },
      message: 'required'
    },
    messages: {
      name: {
        required: 'Enter your first name',
        minlength: 'Name must be at least 2 characters'
      },
      email: {
        required: 'Enter your e-mail address',
        email: 'Please enter a valid e-mail address'
      },
      message: 'Enter your message'
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: '../mail.php',
        data: $(form).serialize(),
        cache: false,
        success: function(data) {
          alert(data);
        }
      })
    }
  });
})();
