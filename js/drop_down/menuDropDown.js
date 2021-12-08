import outsideClick from "../outsideClick/outsideClick.js";

export default function menuDropDown() {
  const dropdownItens = document.querySelectorAll("[data-dropdown]");

  function onClick(event) {
    event.preventDefault();
    this.classList.add("visible");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("visible");
    });
  }

  dropdownItens.forEach((item) => {
    // quando necessario ter mais de um evento com a mesma função é possivel solucionar o problema da seguinte forma.
    // criar um array com os eventos desejados e utilizar o metodo forEach

    ["click", "touchstrat"].forEach((UserEvents) => {
      item.addEventListener(UserEvents, onClick);
    });
  });
}
