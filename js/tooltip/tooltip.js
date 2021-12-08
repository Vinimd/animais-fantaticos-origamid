export default function tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 25}px`;
      this.tooltipBox.style.left = `${event.pageX + 25}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function creatElement(element) {
    const divTolltip = document.createElement("div");
    divTolltip.classList.add("tooltip");
    divTolltip.innerText = element.getAttribute("aria-label");
    document.body.append(divTolltip);
    return divTolltip;
  }

  function onMouseOver() {
    const tooltipBox = creatElement(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
