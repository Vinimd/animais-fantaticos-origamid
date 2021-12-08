import navTab from "./nav__tab/navTab.js";
import accordionList from "./accordion__list/accordionList.js";
import ScrollSuave from "./soft_scroll/softScroll.js";
import dataRight from "./add_show_right/addShowRight.js";
import changeScrollanimation from "./animacao__ao__scroll/animacaoScroll.js";
import modal from "./modal/modal.js";
import tooltip from "./tooltip/tooltip.js";
import menuDropDown from "./drop_down/menuDropDown.js";
import mobileMenu from "./mobile__menu/menuMobile.js";
import initOpen from "./open/open.js";
import InitFetchAnimais from "./fetch-animais/fetch-animais.js";

window.onload = function init() {
  const scrollSuave = new ScrollSuave("[data-anime='menu'] a[href^='#']");
  scrollSuave.init();
  navTab();
  accordionList();
  dataRight();
  changeScrollanimation();
  modal();
  tooltip();
  menuDropDown();
  mobileMenu();
  initOpen();
  InitFetchAnimais();
};
