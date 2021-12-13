export default class Scrollanimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((section) => {
      const topDistance = section.getBoundingClientRect().top - this.halfWindow;
      if (topDistance < 0) {
        section.classList.add("scroll-change");
      } else if (section.classList.contains("scroll-change")) {
        section.classList.remove("scroll-change");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.sections[0].classList.add("scroll-change");
      window.addEventListener("scroll", this.scrollAnimation);
    }
  }
}
