export default function initAnimaNumero() {
  const animalsNumber = document.querySelectorAll("[data-numero]");
  const observeTarget = document.querySelector(".numeros");
  function animation() {
    animalsNumber.forEach((number) => {
      let cont = 0;
      const spanNumber = +number.innerText;
      const add = Math.floor(spanNumber / 100);

      const timer = setInterval(() => {
        cont += add;
        number.innerText = cont;
        if (cont > spanNumber) {
          number.innerText = spanNumber;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  let observer;
  function animaNumber(mutation) {
    if (mutation[0].target.classList.contains("scroll-change")) {
      observer.disconnect();
      animation();
    }
  }
  observer = new MutationObserver(animaNumber);

  observer.observe(observeTarget, {
    attributes: true,
  });
}
