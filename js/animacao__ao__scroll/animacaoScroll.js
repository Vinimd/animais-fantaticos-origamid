export default function changeScrollanimation() {
  const sections = document.querySelectorAll("[data-anime ='scroll']");

  function scrollAnimation() {
    const halfWindow = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const topDistance = section.getBoundingClientRect().top - halfWindow;
      if (topDistance < 0) {
        section.classList.add("scroll-change");
      } else if (section.classList.contains("scroll-change")) {
        section.classList.remove("scroll-change");
      }
    });
  }

  if (sections.length) {
    sections[0].classList.add("scroll-change");

    window.addEventListener("scroll", scrollAnimation);
  }
}
