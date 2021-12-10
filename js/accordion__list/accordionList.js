export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona evento aos itens da accordionList
  addAccordionEvent() {
    this.accordionList.forEach((dt) => {
      dt.addEventListener("click", () => this.toggleAccordion(dt));
    });
  }

  // iniciar a função
  init() {
    if (this.accordionList.length) {
      // ativa o primeiro elemento
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
