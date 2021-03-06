// Search Toggle Bar
const searchBtn = document.querySelector(".header__icon");
const searchBox = document.querySelector(".header__search-box");

searchBtn.addEventListener("click", function () {
  searchBox.classList.toggle("showSearch");
});

// Nav Toggle
function navToggle() {
  const navBox = document.querySelector(".header__nav-list");
  navBox.classList.toggle("showNav");
}

// Remove .showNav when one of item is clicked
const navLink = document.querySelectorAll(".header__nav-link");

navLink.forEach((n) => n.addEventListener("click", navToggle));

// Video Pop-up
function videoPopup() {
  const videoBox = document.querySelector(".story__video-pop");
  videoBox.classList.toggle("showVideo");
  const iframe = document.querySelector(".responsive-iframe");
  if (iframe !== null) {
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
}

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Scroll Up to Top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Scroll Reveal Animation
ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
}).reveal(".hero__content", {
  origin: "top",
  interval: 100,
});

// Swiper Slider
const swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
