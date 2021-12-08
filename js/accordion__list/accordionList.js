export default function accordionList() {
  const faqItens = document.querySelectorAll("[data-faq='accordion'] dt");

  function addClassAtivo() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  if (faqItens.length) {
    faqItens[0].classList.add("ativo");
    faqItens[0].nextElementSibling.classList.add("ativo");

    faqItens.forEach((dt) => {
      dt.addEventListener("click", addClassAtivo);
    });
  }
}
