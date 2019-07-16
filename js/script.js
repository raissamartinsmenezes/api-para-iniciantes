// nav
jQuery(document).ready(function () {

  $(window).scroll(function () {
     if ($(this).scrollTop() > 300) {
      $('#toTop').fadeIn(400);
    } else {
      $('#toTop').fadeOut(400);
    }
  });
      
  $('#toTop').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 300);
  });

  $(window).ready(function () {
    // menu hover + dropdown
    $("ul").hover(function () {
      $(this).find(".nav-active").slideToggle();
      $(this).siblings().find('.nav-active').slideUp();
    }
    );
  });

});

// scrooll menu
(function () {
  'use strict';

  let section = document.querySelectorAll(".section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})()






