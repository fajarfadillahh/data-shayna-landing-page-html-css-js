// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// BACKGROUND HEADER MENU
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 20
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);
