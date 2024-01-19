/*----------------------------------------------------------------------------------*/
console.log("aqui esta la investigacion de el teorema de pitagoras")
alert("hola, puedes ingresar 2 numeros para hallar la ipotenusa")
/* intento que el calculo sea de:
c = a2 + b2 */

let ladoA = prompt("ingrese su primer numero");
let ladoB = prompt("ingrese el siguiente numero");
let a = Number (ladoA);
let b = Number(ladoB);
let  hipo = 0;
if (a && b){
    hipo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    console.log(`el resultado de la hipotenusa es = ${hipo}` );
}
else {
     console.log("ingrese un numero");
}
