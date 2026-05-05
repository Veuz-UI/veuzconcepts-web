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


// nav dropdown
// main dropdown
$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  let parent = $(this).parent();

  $('.dropdown').not(parent).removeClass('active');
  parent.toggleClass('active');
});

// submenu click
$('.submenu-toggle').click(function(e){
  e.preventDefault();
  let parent = $(this).parent();

  $('.submenu').not(parent).removeClass('active');
  parent.toggleClass('active');
});

// click outside close
$(document).click(function(e){
  if (!$(e.target).closest('.dropdown').length) {
    $('.dropdown, .submenu').removeClass('active');
  }
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
  $('.banner-client-slider').owlCarousel({
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
        items: 5,
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


// product-slider
var owl = $('.product-slider').owlCarousel({
      loop:true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          500:{
              items:1.5
          },
          800:{
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



//// inner pages ////

// product-slider
var owl = $('.portfolio-slider').owlCarousel({
      loop:true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          650:{
              items:2
          },
          
          1200:{
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

// third-slider
var owl = $('.third-slider').owlCarousel({
      loop:true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          650:{
              items:2
          },
          
          1200:{
              items:4
          }
      }
});
$('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


// staff-hour-four-slider
var owl = $('.staff-hour-four-slider').owlCarousel({
      loop:true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          650:{
              items:3
          },
          
          1200:{
              items:5
          }
      }
});
$('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


// technologies slider
var owl = $('.technologies-slider').owlCarousel({
      loop:true,
      margin:30,
      autoplay:true,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          650:{
              items:3
          },
          
          1200:{
              items:7
          }
      }
});
$('.core-next').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.core-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});













    // function updateActiveItem($carousel) {
    //     // Mobile: all items active (Less than 768px)
    //     if ($(window).width() < 768) {
    //         $carousel.find(".item").addClass("active");
    //         return;
    //     }

    //     // Desktop: remove previous active and add to first visible
    //     $carousel.find(".item").removeClass("active");
    //     // Owl Carousel 'active' ക്ലാസ് ഉള്ള ആദ്യത്തെ ഐറ്റം കണ്ടെത്തുന്നു
    //     const firstVisibleItem = $carousel.find(".owl-item.active").first().find(".item");

    //     if (firstVisibleItem.length) {
    //         // Add fade-in animation when new active appears
    //         firstVisibleItem.addClass("active fade-in");
    //         setTimeout(() => {
    //             firstVisibleItem.removeClass("fade-in");
    //         }, 600); // match with CSS animation duration
    //     }
    // } 
    
    

    // // 💡 Function to Initialize Owl Carousel with all settings
    // function initializeCarousel($carousel) {
    //     // 1️⃣ Initialize Owl Carousel
    //     $carousel.owlCarousel({
    //         autoWidth: true,
    //         loop: true,
    //         dots: false,
    //         nav: false,
    //         autoplay: false,
    //         autoplayTimeout: 3000,
    //         autoplayHoverPause: true,
    //         margin: 15,

    //         // Disable dragging manually
    //         mouseDrag: false,
    //         touchDrag: false,
    //         pullDrag: false,
    //         freeDrag: false,

    //         slideSpeed: 600,
    //         dragEndSpeed: 600,

    //         responsive: {
    //             0: {
    //                 items: 1.1,
    //                 autoWidth: false,
    //                 margin: 10,
    //             },
    //             768: {
    //                 autoWidth: false,
    //                 items: 1.2,
    //                 margin: 15,
    //             },
    //             991: {
    //                 autoWidth: false,
    //                 items: 1.2,
    //                 margin: 15,
    //             },
    //             1199: {
    //                 autoWidth: false,
    //                 items: 2.5,
    //                 margin: 15,
    //             },
    //             1200: {
    //                 autoWidth: true,
    //                 items: 2.5,
    //                 margin: 15,
    //             },
    //             1400: {
    //                 autoWidth: true,
    //                 items: 3.2,
    //                 margin: 15,
    //             },
    //         },

    //         onInitialized: function () {
    //             updateActiveItem($carousel);
    //         },
    //         onResized: function () {
    //             // Owl Carousel-ന്റെ resize ഇവന്റ്. updateActiveItem മാത്രം വിളിക്കുന്നു.
    //             if ($(window).width() >= 768) {
    //                 updateActiveItem($carousel);
    //             }
    //         },
    //     });

    //     // Custom Navigation-ന് വേണ്ടി owl object തിരികെ നൽകുന്നു
    //     return $carousel.data("owl.carousel");
    // }

// // 💡 Function to handle Maximize/Restore events via window resize
// let previousWidth = $(window).width();
// let resizeTimer;

// function handleWindowResize($carousel, initializationFunction) {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function () {
//         const currentWidth = $(window).width();
        
//         // Breakpoint മാറുകയാണോ എന്ന് പരിശോധിക്കുന്നു
//         const isBreakpointChange = 
//             (previousWidth < 768 && currentWidth >= 768) ||
//             (previousWidth >= 768 && currentWidth < 768);

//         // വലുപ്പത്തിൽ വലിയ മാറ്റം (Maximize/Restore) ഉണ്ടോ എന്ന് പരിശോധിക്കുന്നു (ഒരു വലിയ ജമ്പ്).
//         const isMajorResize = Math.abs(currentWidth - previousWidth) > 50; 

//         if (isBreakpointChange || isMajorResize) { 
            
//             // നിലവിലുള്ള കാറൗസൽ destroy ചെയ്യുക (ഉള്ളടക്കം നഷ്ടപ്പെടാതെ)
//             if ($carousel.data("owl.carousel")) {
//                 $carousel.data("owl.carousel").destroy();
//                 // ⚠️ പ്രധാന മാറ്റം: $carousel.empty() ഇവിടെ ഒഴിവാക്കിയിരിക്കുന്നു 
//                 // ഉള്ളടക്കം (കാർഡുകൾ) നിലനിർത്താൻ വേണ്ടിയാണിത്.
//             }
            
//             // കാറൗസൽ re-initialize ചെയ്യുക
//             const owl = initializationFunction($carousel);

//             // Custom Navigation വീണ്ടും സെറ്റ് ചെയ്യുക (Re-bind Custom Navigation)
//             $(".custom-prev-btn").off("click").on("click", function () {
//                 owl.prev();
//             });
//             $(".custom-next-btn").off("click").on("click", function () {
//                 owl.next();
//             });

//         } else {
//             // ചെറിയ resize-കൾക്ക് refresh മാത്രം മതി
//             $carousel.trigger("refresh.owl.carousel");
//         }

//         updateActiveItem($carousel); // active item അപ്‌ഡേറ്റ് ചെയ്യുക
//         previousWidth = currentWidth; // അടുത്ത താരതമ്യത്തിനായി നിലവിലെ വലുപ്പം സംഭരിക്കുക

//     }, 300); // Debounce time
// }

// $(document).ready(function () {
//     const $carousel = $(".custom-carousel");

//     // 1️⃣ Initial initialization
//     let owl = initializeCarousel($carousel);
//     const owlInstance = $carousel.data('owl.carousel');

//     // 2️⃣ Custom Navigation Buttons (only control allowed)
//     $(".custom-prev-btn").on("click", function () {
//         owl.prev();
//     });

//     $(".custom-next-btn").on("click", function () {
//         owl.next();
//     });

//     // Make items focusable and show pointer
//     const interactiveSelector = 'a, button, input, textarea, select, label';
//     $carousel.find('.item').attr('tabindex', 0).css('cursor', 'pointer');

//     // 3️⃣ Click / keyboard: move clicked item to visible and mark active (desktop)
//     $carousel.on('click', '.item', function (e) {
//         // Ignore clicks on interactive children
//         if ($(e.target).closest(interactiveSelector).length) return;
//         if ($(window).width() < 768) return; // mobile: keep existing behavior

//         const $item = $(this);
//         const $owlItem = $item.closest('.owl-item');
//         const absoluteIndex = $owlItem.index(); // index among .owl-item (includes clones)

//         const owlInst = $carousel.data('owl.carousel');
//         if (!owlInst) return;

//         // convert absolute index to relative index that Owl uses internally
//         const targetIndex = typeof owlInst.relative === 'function'
//             ? owlInst.relative(absoluteIndex)
//             : absoluteIndex;

//         // Move carousel so clicked item becomes the first visible slide
//         // Use owlInst.to for reliable behavior
//         if (typeof owlInst.to === 'function') {
//             owlInst.to(targetIndex, 600, true);
//         } else {
//             $carousel.trigger('to.owl.carousel', [targetIndex, 600, true]);
//         }

//         // immediate visual feedback
//         $carousel.find('.item').removeClass('active');
//         $item.addClass('active');
//     });

//     $carousel.on('keydown', '.item', function (e) {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             $(this).trigger('click');
//         }
//     });

//     // 4️⃣ When slide changes — update active item
//     $carousel.on("translated.owl.carousel", function () {
//         if ($(window).width() >= 768) {
//             updateActiveItem($carousel);
//         }
//     });

//     // 5️⃣ Handle Maximize/Restore/Resize gracefully
//     $(window).on("resize", function () {
//         handleWindowResize($carousel, initializeCarousel);
//     });
// });


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

// client-slider2
  $('.client-slider2').owlCarousel({
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