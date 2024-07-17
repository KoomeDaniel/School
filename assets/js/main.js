/*animate aos */
AOS.init({
 

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// Initialize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  // Your Fancybox configuration (if any)
});

// Initialize Swiper
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3, // when set to auto all the reviews are shown on the slider
  loop: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  on: {
      slideChangeTransitionStart: function() {
          this.slides.forEach(slide => {
              if (slide.classList.contains('swiper-slide-active')) {
                  slide.style.filter = 'none';
                  slide.style.transform = 'scale(1)';
                  slide.style.opacity = '1';
              } else {
                  slide.style.filter = 'blur(5px)';
                  slide.style.transform = 'scale(0.8)';
                  slide.style.opacity = '0.5';
              }
          });
      },
      init: function() {
          this.emit('slideChangeTransitionStart');
      }
  }
});

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  let counts = document.querySelectorAll(".num");

  counts.forEach((counter) => {
      function easeOutQuad(t) {
          return t * (2 - t);
      }

      function animateCountUp() {
          const target = +counter.getAttribute('data-val');
          const duration = 2000; // duration of the animation in milliseconds
          let start = null;

          function step(timestamp) {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              const easeProgress = easeOutQuad(Math.min(progress / duration, 1));
              counter.innerText = Math.floor(easeProgress * target);

              if (progress < duration) {
                  requestAnimationFrame(step);
              } else {
                  counter.innerText = target;
              }
          }

          requestAnimationFrame(step);
      }

      animateCountUp();
  });
});
