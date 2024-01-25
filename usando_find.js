

let jugetes = ["pistolas", "muñecos", "autitos"];

let buscar = jugetes.find(function(f) { return f === "autitos" });
let buscar1 = jugetes.find(f => f === "muñecos") 
console.log(buscar, buscar1 )

function desgraciado(){
    console.log("hola que tal")
}
desgraciado()

arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
//ordenacion sorting

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(names);
console.log(ages);

names.reverse()
ages.reverse()
console.log(names);
console.log(ages);
