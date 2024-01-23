let oracion = 'hoy estoy aprendiendo a usar "javascript": //!';
let saludo = `hola buenas ${oracion}, `;
let or = "espero que esté todo \"BIEN\" ¿verdad?"

console.log (saludo)
let result = saludo + or
console.log (result)

console.log('aqui se utilizara el codigo "Symbol"')
let sr1 = "javacript es divertido"
let sr2 = "javacript es divertido"
console.log("estas dos variables son lo mismo", sr1 === sr2);


let src1 = Symbol("javacript es divertido");
let src2 = Symbol("javacript es divertido");
console.log ("estas dos variables son lo mismo", src1 === src2)

let noasignado;
console.log(noasignado);

let terribleCosaParaHacer = undefined;
let apellido;
console.log("Mismos undefined: ", apellido === terribleCosaParaHacer);

let buenaPractica = null;
console.log("El null: ", apellido === buenaPractica);

let str = "holis";
let nr = 7;
let bigNr = 1234567891234n;
let bool = true;
let sym = Symbol("único");
let undef = undefined;
let desconocido = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("desconocido", typeof desconocido);

