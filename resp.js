burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
rightnav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
  rightnav.classList.toggele("v-class");
  navlist.classList.toggele("v-class");
  navbar.classList.toggele("nav-height");
});
