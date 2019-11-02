/* -----------------------------------------------
/* PARTICLESJS
/* ----------------------------------------------- */
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

/* -----------------------------------------------
/* MENU NEO
/* ----------------------------------------------- */

function neo(){
  $('.nav-item a').each(function() {
    var thi = $(this);
    var href = thi.attr('href');
    var rol = $(href).offset().top;

    thi.click(function() {
      $('html, body').animate({
        scrollTop: rol - 62
      }, 600);
      return false;
    });

    $(window).scroll(function() {
      var yoffset = window.pageYOffset;
      var thistop = rol - 120;
      if (yoffset > thistop) {
        $('.nav-item').removeClass('active');
        thi.parent().addClass('active');
      }
    });
  });
}

function scrollNav(){
  var navYOffset = window.pageYOffset;
  var bgnav = $('.bg-nav-customer');
  if (navYOffset > 120) {
    bgnav.addClass('bg-nav-ontop');
  } else {
    bgnav.removeClass('bg-nav-ontop');
  }
}

$(window).bind("load", function() {
  neo();
});

$(window).scroll(function () {
  scrollNav();
});


$(function() {

  $('.progressbar').each(function(){
    var t = $(this);
    var dataperc = t.attr('data-perc'),
        barperc = Math.round(dataperc*5.56);
    t.find('.bar').animate({width:barperc}, dataperc*25);
    t.find('.label').append('<div class="perc"></div>');

    function perc() {
      var length = t.find('.bar').css('width'),
          perc = Math.round(parseInt(length)/5.56),
          labelpos = (parseInt(length)-2);
      t.find('.label').css('left', labelpos);
      t.find('.perc').text(perc+'%');
    }
    perc();
    setInterval(perc, 0);
  });
});