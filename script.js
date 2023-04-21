const form = document.getElementById("calculator"); // Selecciona el formulario de calculadora en el HTML.
const result = document.getElementById("result"); // Selecciona el elemento HTML donde se mostrará el resultado.

form.addEventListener("submit", (event) => { // permite validar.
  event.preventDefault(); // Evita que la página se recargue cuando se envía el formulario.

  const num1 = Number(event.target.num1.value); // Obtiene el valor del primer número del formulario.
  const num2 = Number(event.target.num2.value); // Obtiene el valor del segundo número del formulario.

  for (let i = 1; i <= 5; i++) { // Inicia un ciclo para calcular cinco operaciones diferentes.
    switch (i) {
      case 1:
        result.innerText += `Suma: ${num1 + num2}\n`; // Agrega la suma de los dos números al resultado.
        break;
      case 2:
        result.innerText += `Resta: ${num1 - num2}\n`; // Agrega la resta de los dos números al resultado.
        break;
      case 3:
        result.innerText += `Multiplicación: ${num1 * num2}\n`; // Agrega la multiplicación de los dos números al resultado.
        break;
      case 4:
        result.innerText += `División: ${num1 / num2}\n`; // Agrega la división de los dos números al resultado.
        break;
      case 5:
        result.innerText += `Módulo: ${num1 % num2}\n`; // Agrega el módulo de los dos números al resultado.
        break;
    }
  }
});
