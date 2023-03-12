/*Escribe una función que pregunte al usuario la temperatura en grados Fahrenheit.
Deberás entonces convertir ese valor a grados Celsius e imprimir en consola o en pantalla el resultado.*/

const fahrenheit = prompt("Ingresa un valor en grados Fahrenheit: ");
const celsius = (fahrenheit - 32) / 1.8;

alert(`${fahrenheit} Grados Fahrenheit es igual a ${celsius} Grados Celsius.`);