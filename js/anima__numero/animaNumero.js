export default class AnimaNumero {
  constructor(animal, classObserver, observeTarget) {
    this.animalsNumber = document.querySelectorAll(animal);
    this.observerClass = classObserver;
    this.observeTarget = document.querySelector(observeTarget);
    this.animaNumber = this.animaNumber.bind(this);
  }

  // recebe um elemento do DOM ,contento um numero em forma de string
  // converte a string em numero e começa incrmentar a partir de 0
  static numberIncrement(number) {
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
  }

  // adicona o efeito de animação aos numeros selecionados
  animation() {
    this.animalsNumber.forEach((number) => {
      this.constructor.numberIncrement(number);
    });
  }

  animaNumber(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animation();
    }
  }

  // adicona observerMutation para verificar quando a classe scroll-change é adicionda
  // ao elemento target
  addObserverMutation() {
    this.observer = new MutationObserver(this.animaNumber);
    this.observer.observe(this.observeTarget, {
      attributes: true,
    });
  }

  init() {
    if (this.animalsNumber.length && this.observeTarget && this.observerClass) {
      this.addObserverMutation();
    }
    return this;
  }
}
