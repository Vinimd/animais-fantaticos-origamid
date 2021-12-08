export default function sofScroll() {
  const links = document.querySelectorAll("[data-anime='menu'] a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const id = event.target.hash;

    const searchId = document.querySelector(id);

    searchId.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma Alternatina
    // const top = searchId.offsetTop;
    // console.log(top)
    // window.scrollTo({
    //     top:top,
    //     behavior:"smooth",
    // },)
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
