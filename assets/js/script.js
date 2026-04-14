//// loader
function hideLoader() {
    const l = document.getElementById('loader');
    l.classList.add('hide');
    setTimeout(() => {
      l.style.display = 'none';
      document.getElementById('page').classList.add('show');
    }, 500);
  }
 
  // arcs finish at ~2.05+0.42 = 2.47s, add buffer
  setTimeout(hideLoader, 3000);
 
  function replayLoader() {
    const l = document.getElementById('loader');
    l.style.cssText = 'display:flex; opacity:1; transform:none;';
    l.classList.remove('hide');
    document.getElementById('page').classList.remove('show');
 
    // l.querySelectorAll('.g-text, .g-dot, .g-card, .g-arc1, .g-arc2, .g-arc3, .g-arc4, .bar-wrap, .bar-fill')
    //   .forEach(el => {
    //     el.style.animation = 'none';
    //     el.offsetHeight; // reflow
    //     el.style.animation = '';
    //   });
 
    setTimeout(hideLoader, 3000);
  }
/// END pre loader


// nav scroll
$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.main-header-in'),
      navEl = $('nav'),
      linkScroll = $('.scroll');

  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });

  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });
});

// nav mobile 
var t1 = new TimelineMax({
  paused: true
});
t1.to(".nav-container", 1, {
  left: 0,
  ease: Expo.easeInOut
});
t1.staggerFrom(
  ".menu > div",
  0.8, {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut
  },
  0.1,
  "-=0.4"
);
// animate buttons
t1.staggerFrom(
  ".mob-btn",
  0.8,
  {
    y: 80,
    opacity: 0,
    ease: Expo.easeOut
  },
  0.2,
  "-=0.4"
);
t1.reverse();
$(".menu-toggle").click(function () {
  $(this).toggleClass("active"); // hamburger animation
  t1.reversed(!t1.reversed()); // popup open close
  return false;
});

// banner clients 
document.addEventListener("DOMContentLoaded", function () {
  $('.client-slider').owlCarousel({
    items: 3,
    margin: 10,
    lazyLoad: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoPlayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      }
    }
  });
});


/* <!-- ==================== Reveal type ==================== --> */
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    // Split into words first to prevent breakage
    const text = new SplitType(char, {
        types: 'words, chars' // First split into words, then into characters
    });

    // Ensure words stay together by using `white-space: nowrap`
    gsap.set(text.words, {
        display: 'inline-block',
        whiteSpace: 'nowrap'
    });

    gsap.fromTo(text.chars, {
        color: bg,
    }, {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'bottom 40%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
        }
    });
});

/* <!-- ==================== Reveal type ==================== --> */

// return scroll
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


// ai real world impact slider
var owl = $('.product-slider').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1.5
          },
          650:{
              items:2.5
          },
          
          1000:{
              items:2.5
          }
      }
});
$('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

// testimonial
$(document).ready(function(){
  var owl = $('.testimonial-slider');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    nav: false,
    dots: false,
    responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          800:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  $('.testim-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.testim-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});




  // ── Counter animation 0 → 920 ──
  var target   = 920;
  var duration = 1800;
  var start    = null;
  var el       = document.getElementById('counter');
 
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
 
  setTimeout(function() {
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }, 400);






  $('.client-slider').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 800,

  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});