export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // cria a tooltip e a adiciona ao body
  creatElement(element) {
    const divTolltip = document.createElement("div");
    divTolltip.classList.add("tooltip");
    divTolltip.innerText = element.getAttribute("aria-label");
    document.body.append(divTolltip);
    this.tooltipBox = divTolltip;
  }

  // move a tooltip com base me seus estilos de acordo com seus estilos
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 25}px`;
    if (event.pageX + 255 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 189}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 25}px`;
    }
  }

  // remove a tooltip e remove os eventos de mousemouve emouseleave
  onMouseLeave() {
    this.tooltipBox.remove();
    this.element.removeEventListener("mouseleave", this.onMouseLeave);
    this.element.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltip e adiciona os eventos de mousemove e mouseleave
  // ao target
  onMouseOver(event) {
    this.creatElement(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    this.element = event.currentTarget;
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // adicona o evento de mouseover ao target
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
