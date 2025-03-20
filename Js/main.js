const loading = document.getElementById("loading");

const loadingDuration = 3010; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("header");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     toggleBacktop();
//   });

//   let backtop = document.getElementById("backtop");

//   function toggleBacktop() {
//     if (
//       document.body.scrollTop > 150 ||
//       document.documentElement.scrollTop > 150
//     ) {
//       backtop.classList.add("backtop-show");
//     } else {
//       backtop.classList.remove("backtop-show");
//     }
//   }
// });

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

// AOS.init();
