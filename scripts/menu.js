const MenuButton = document.querySelector(".menu__adaptive");
const Menu = document.querySelector(".menu");
if (MenuButton) {
  MenuButton.addEventListener("click", (e) => {
    document.body.classList.toggle("body_lock");
    MenuButton.classList.toggle("menu_active");
    Menu.classList.toggle("menu_active");
  });
}

function closeMenu() {
  if (MenuButton.classList.contains("menu_active")) {
    document.body.classList.remove("body_lock");
    MenuButton.classList.remove("menu_active");
    Menu.classList.remove("menu_active");
  }
}
const menuItem = document.querySelectorAll(".menu__item");
menuItem.forEach((el) => {
  el.addEventListener("click", closeMenu);
});
