import ScrollSuave from "./soft_scroll/softScroll.js";
import Accordion from "./accordion__list/accordionList.js";
import NavTab from "./nav__tab/navTab.js";
import Modal from "./modal/modal.js";
import dataRight from "./add_show_right/addShowRight.js";
import changeScrollanimation from "./animacao__ao__scroll/animacaoScroll.js";
import tooltip from "./tooltip/tooltip.js";
import menuDropDown from "./drop_down/menuDropDown.js";
import mobileMenu from "./mobile__menu/menuMobile.js";
import initOpen from "./open/open.js";
import InitFetchAnimais from "./fetch-animais/fetch-animais.js";

window.onload = function init() {
  const scrollSuave = new ScrollSuave("[data-anime='menu'] a[href^='#']");
  scrollSuave.init();

  const accordion = new Accordion("[data-faq='accordion'] dt");
  accordion.init();

  const navTab = new NavTab(
    "[data-tab='menu'] li",
    "[data-tab='content'] section"
  );
  navTab.init();

  const modal = new Modal(
    '[data-modal ="loging"]',
    '[data-modal ="close"]',
    '[data-modal ="container"]'
  );
  modal.init();

  dataRight();
  changeScrollanimation();
  tooltip();
  menuDropDown();
  mobileMenu();
  initOpen();
  InitFetchAnimais();
};
