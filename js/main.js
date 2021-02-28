const navbarToggler = document.querySelector("#burger-menu");
const navbarMenu = document.querySelector('.cabecera')

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarMenu.classList.toggle("menu-toggler");
}