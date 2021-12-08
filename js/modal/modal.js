export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open);
    this.closeButton = document.querySelector(close);
    this.containerModal = document.querySelector(container);

    this.toggleModalEvent = this.toggleModalEvent.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  toggleModalEvent(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutside(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.closeButton.addEventListener("click", this.toggleModalEvent);
    this.openButton.addEventListener("click", this.toggleModalEvent);
    this.containerModal.addEventListener("click", this.clickOutside);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
