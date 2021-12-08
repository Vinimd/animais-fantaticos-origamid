export default function modal() {
  const openButton = document.querySelector('[data-modal ="loging"]');
  const closeButton = document.querySelector('[data-modal ="close"]');
  const containerModal = document.querySelector('[data-modal ="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function clickOutside(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (openButton && closeButton && containerModal) {
    closeButton.addEventListener("click", toggleModal);
    openButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutside);
  }
}
