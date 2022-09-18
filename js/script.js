const testimonials = new Swiper(".testimonials-swiper", {
  spaceBetween: 35,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  rtl: true,
});

function getCurrentYear() {
  let date = new Date();
  const currentYear = date.getFullYear();
  let footerYear = document.getElementById("current-year");
  footerYear.textContent = currentYear;
}
getCurrentYear();
