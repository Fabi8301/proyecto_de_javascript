//variables normales y sus tipos;
let variable = "hola";

//arrays, lista de verduras?
let arr = ["tomate","locote","cebolla","papa"];

console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr[5]);
console.log(arr[-1]);
arr[5] = "banana";
arr[-1] = "repollo";
console.log(arr.length);
console.log(arr[5]);
console.log(arr[-1]);

arr.push("peregil");
console.log(arr[6]);

const semilla1 = arr.splice(0,2); 
const semilla2 = arr[3]
const mezcla = semilla1.concat(semilla2)
console.log(mezcla);