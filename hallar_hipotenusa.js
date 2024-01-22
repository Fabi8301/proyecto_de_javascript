/*----------------------------------------------------------------------------------*/
console.log("aqui esta la investigacion de el teorema de pitagoras")
alert("hola, puedes ingresar 2 numeros para hallar la ipotenusa")
/* intento que el calculo sea de:
c = a2 + b2 */

let ladoA = prompt("ingrese su primer numero");
let ladoB = prompt("ingrese el siguiente numero");
let la = Number (ladoA);
let lb = Number(ladoB);
let  hipo = 0;
if (la && lb){
    hipo = Math.sqrt(Math.pow(la, 2) + Math.pow(lb, 2))
    console.log(`el resultado de la hipotenusa es = ${hipo}` );
}
else {
     console.log("ingrese un numero");
}

/*Ejerciocio 2.4 
Crea variables para tres números: a, b, c. Actualiza los valores de esas variables usando los operadores de asignación:
Suma b en a
Divide a con c
Reemplaza el valor de c con el módulo de c y b
Imprimir los tres números en consola*/

let a = 20, b = 18, c = 4


let result1 = b + a 
let result2 = a / c
    c = c % b
let resul3 = c
console.log("la suma de 20 y 18 es:",result1)
console.log("la divicion de 20 y 4 es:",result2)
console.log("el resto del valor de 4 y 18 es:",resul3)

