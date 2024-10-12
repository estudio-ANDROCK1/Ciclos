//generar secuencias aleatorias  de 10 números enteros entre 1 y 100 utilizando while sin repetir numero
let  numeros = [];
let  i = 0;
while (i < 10) {
    let  aleatorio = Math.floor(Math.random() * 10) + 1;
    if (!numeros.includes(aleatorio)) {
        numeros.push(aleatorio);
        i++;
        }
        }
        console.log(numeros);

