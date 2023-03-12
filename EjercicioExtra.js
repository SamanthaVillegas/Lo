/*Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
En caso de ser vocal, devolver "Vocal"
En caso de ser consonante, devolver "Consonante"*/

var letra;
letra = prompt ("Ingresa una letra").toUpperCase();

if (letra == "A" | letra == "E" | letra == "I" | letra == "O" | letra == "U")
{
    alert("La letra es una vocal");
}
else if (letra == "B" | letra == "C" | letra == "D" | letra == "F" | letra == "G" | letra == "H" | letra == "I" | letra == "J" | letra == "K" | letra == "L" | letra == "M" | letra == "N" | letra == "P" | letra == "Q" | letra == "R" | letra == "S" | letra == "T" | letra == "V" | letra == "W" | letra == "X" | letra == "Y" | letra == "Z")
{
    alert("La letra es una consonante");
}
else
{
    alert("Intentelo de nuevo");
}