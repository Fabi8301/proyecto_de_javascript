let caja1 = ["leche", "pan", "manzana"];
console.log(caja1, caja1.length);

caja1.splice(1, 1, "banana", "huevos");
console.log(caja1, caja1.length);
caja1.splice(3, 1 )
console.log(caja1, caja1.length);
caja1.sort()
console.log(caja1, caja1.length);
console.log("ahora el indice de leche esta en el:", caja1[2]);
caja1.splice(1, 0, "zanahoria", "lechuga");
console.log(caja1, caja1.length);

let caja2 = ["jugo", "pop "]
caja3 = caja1.concat(caja2, `${caja2}`);
console.log(caja3, caja3.length);
 
//ejercicio 3.3 para aprovechar el espacio

let box1 = [1, 2, 3];
let box2 = [4, 5, 6];
let box3 = [7, 8, 9];

box = [box1, box2, box3]
console.log(box);
console.log(box[0])
