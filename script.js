document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-up');

  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Initialize Swiper
  const heroSwiper = new Swiper('.hero-gallery', {
    loop: true,
    pagination: {
      el:('.swiper-pagination'),
      clickable: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        allowTouchMove: false, // Prevent swiping on desktop
      },
      0: {
        slidesPerView: 1,
        allowTouchMove: true, // Enable swiping on mobile
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      }
    }
  });
});
