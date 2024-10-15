let numeroIngresado;

while (numeroIngresado !== 0) {
  numeroIngresado = parseInt(prompt("Ingrese un número (0 para salir): "));

  if (numeroIngresado !== 0) {
    console.log("Número ingresado:", numeroIngresado);
  }
}