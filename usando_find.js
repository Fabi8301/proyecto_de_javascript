let jugetes = ["pistolas", "muñecos", "autitos"];

let buscar = jugetes.find(function(f) { return f === "autitos" });
let buscar1 = jugetes.find(f => f === "muneco") 
console.log(buscar, buscar1 )