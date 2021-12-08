import initAnimaNumero from "../anima__numero/animaNumero.js";

export default function InitFetchAnimais() {
  const divNumeros = document.querySelector(".numeros-grid");

  function CreateAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  async function FetchAnimais(url) {
    try {
      const promiseAnimais = fetch(url);
      const animais = await (await promiseAnimais).json();

      animais.forEach((animal) => {
        const divAnimal = CreateAnimal(animal);
        divNumeros.append(divAnimal);
      });
      initAnimaNumero();
    } catch (erro) {
      console.log(erro);
    }
  }
  FetchAnimais("./animaisapi.json");
}
