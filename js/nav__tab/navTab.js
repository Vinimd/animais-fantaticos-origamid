export default class NavTab {
  constructor(menu, conteudo) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabConteudo = document.querySelectorAll(conteudo);
  }

  activeTab(index) {
    this.tabConteudo.forEach((item) => {
      if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });

    this.tabConteudo[index].classList.add("ativo");
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabConteudo.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
