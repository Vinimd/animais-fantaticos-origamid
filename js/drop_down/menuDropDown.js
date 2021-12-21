import outsideClick from "../outsideClick/outsideClick.js";

export default class DropDown {
  constructor(dropdownItens, events) {
    this.dropdownItens = document.querySelectorAll(dropdownItens);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    if (events === undefined) this.events = ["click", "touchstrat"];
    else this.events = events;

    this.activeClass = "visible";
  }

  // ativa o dropdown menu
  // e observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adicona os eventos ao Dropdown Menu
  addDropdownEvent() {
    this.dropdownItens.forEach((item) => {
      // quando necessario ter mais de um evento com a mesma função é possivel solucionar o problema da seguinte forma.
      // criar um array com os eventos desejados e utilizar o metodo forEach

      this.events.forEach((UserEvents) => {
        item.addEventListener(UserEvents, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownItens.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
