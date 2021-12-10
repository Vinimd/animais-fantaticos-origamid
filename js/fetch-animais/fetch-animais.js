import AnimaNumero from "../anima__numero/animaNumero.js";

export default function fetchAnimais(url, classe) {
  const divNumeros = document.querySelector(".numeros-grid");

  // cria a div que contem o total de animais da especie
  function CreateAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add(classe);
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = CreateAnimal(animal);
    divNumeros.append(divAnimal);
  }

  // realiaza a animação dos numeros dos animais
  function animaAnimaisNumeros() {
    const animaNumero = new AnimaNumero(
      "[data-numero]",
      "scroll-change",
      ".numeros"
    );
    animaNumero.init();
  }

  // Fetch do arquivo que contem os dados dos animails e
  // cria as divs com a função Create Animal
  async function fetchAnimal() {
    try {
      const promiseAnimais = fetch(url);
      const animais = await (await promiseAnimais).json();
      animais.forEach((animal) => fillAnimals(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return fetchAnimal();
}
