/*Escribe una función que reciba como parámetro 3 números.
Posteriormente deberá mostrar en consola o pantalla el número mayor de los 3.*/

var num1;
var num2;
var num3;
var n;

num1=parseInt(prompt("Inserta el primer numero:"));
num2=parseInt(prompt("Inserta el segundo numero:"));
num3=parseInt(prompt("Inserta el tercer numero:"));

function numeromayor(num1, num2, num3, n)
{
    if( num1 > num2)
    {
        n=num1;
    }
    else
    {
        n=num2;
    }
    
    if ( num3 > n)
    {
        n=num3;
    }
    return n;
}

alert("El número mayor es: " + numeromayor(num1, num2, num3, n));