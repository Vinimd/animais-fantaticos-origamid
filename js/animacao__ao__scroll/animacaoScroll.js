export default class Scrollanimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.verifyDistance = this.verifyDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset,
      };
    });
  }

  verifyDistance() {
    const position = window.pageYOffset + this.halfWindow;
    this.distance.forEach((item) => {
      const topDistance = item.offset - position;
      if (topDistance < 0) {
        item.element.classList.add("scroll-change");
      } else if (item.element.classList.contains("scroll-change")) {
        item.element.classList.remove("scroll-change");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.verifyDistance();
      window.addEventListener("scroll", this.verifyDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.verifyDistance);
  }
}
