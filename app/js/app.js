const { createApp } = Vue;

createApp({
  data() {
    return {
      keypro: 33,
      local: 99,
      regional: 3,
    };
  },
}).mount("#app");

$(".owl1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  animateOut: "fadeOut",
  dots: false,
});

$(".owl2").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 6,
    },
  },

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  animateOut: "fadeOut",
  dots: false,
});

$(".owl3").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 6,
    },
  },

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  animateOut: "fadeOut",
  dots: false,
});

