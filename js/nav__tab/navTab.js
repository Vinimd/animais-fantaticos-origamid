export default function navTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function callContent(index) {
    tabContent.forEach((item) => {
      if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });

    tabContent[index].classList.add("ativo");
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        callContent(index);
      });
    });
  }
}
