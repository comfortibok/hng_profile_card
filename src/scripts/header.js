const menuBtn = document.getElementById("menu-btn");
const headerNav = document.querySelector(".header-nav");
const exitBtn = document.getElementById("exit-btn");

menuBtn.addEventListener("click", () => {
  headerNav.classList.add("open-nav");
});

exitBtn.addEventListener("click", () => {
  headerNav.classList.remove("open-nav");
});
