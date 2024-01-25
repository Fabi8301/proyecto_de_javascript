//el codigo de splece para agregar valores al array 
let embutido = ["chorizo", "panchos","fiambre"];
console.log(embutido, embutido.length);
embutido.push("peperoni");
console.log("el embutido 3 es", embutido[2]);
embutido.push("peperoni");
embutido.splice(2, 0, "carne", "lechuga");

console.log(embutido)
//el codigo de shift para eliminar valores de forma lineal 
let arr = ["manzana","banana", "naranja", "limon"]
console.log(arr, arr.length);
//arr.shift(0, 2)
console.log(arr);

//delete funciona casi de la misma manera 
//elimina y remplaza el valor por undefiand
delete arr[2]
console.log(arr);
