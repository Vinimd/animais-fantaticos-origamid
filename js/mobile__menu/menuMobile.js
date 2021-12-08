import outsideClick from "../outsideClick/outsideClick.js";

export default function mobileMenu() {
  const menu = document.querySelector('[data-menu="button"]');
  const list = document.querySelector('[data-menu="list"]');
  const events = ["touchstart", "click"];

  function showMobileMenu() {
    list.classList.toggle("visible");
    menu.classList.toggle("visible");

    outsideClick(list, events, () => {
      list.classList.remove("visible");
      menu.classList.remove("visible");
    });
  }
  if (window.innerWidth <= 700) {
    events.forEach((e) => menu.addEventListener(e, showMobileMenu));
  }
}
