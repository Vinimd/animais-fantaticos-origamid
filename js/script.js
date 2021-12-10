import ScrollSuave from "./soft_scroll/softScroll.js";
import Accordion from "./accordion__list/accordionList.js";
import NavTab from "./nav__tab/navTab.js";
import Modal from "./modal/modal.js";
import Tooltip from "./tooltip/tooltip.js";
import InitFetchAnimais from "./fetch-animais/fetch-animais.js";
import dataRight from "./add_show_right/addShowRight.js";
import changeScrollanimation from "./animacao__ao__scroll/animacaoScroll.js";
import menuDropDown from "./drop_down/menuDropDown.js";
import mobileMenu from "./mobile__menu/menuMobile.js";
import initOpen from "./open/open.js";

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

  const tooltip = new Tooltip("[data-tooltip]");
  tooltip.init();

  dataRight();
  changeScrollanimation();
  menuDropDown();
  mobileMenu();
  initOpen();
  InitFetchAnimais();
};
