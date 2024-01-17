console.log("estos seran los jejercicios de operaciones")
let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "algún string será retornado como true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let snr1 = 12;
let snr2 = 14;
let sresult = snr1 + snr2;
console.log(sresult)

let sstr1 = "Holis ";
let sstr2 = "adición";
let result = sstr1 + sstr2;
console.log(result)

let rnr1 = 20;
let rnr2 = 4;
let rstr1 = "Holis";
let rnr3 = 3;
let rresult1 = rnr1 - rnr2;
let rresult2 = rstr1 - rnr3;
console.log(rresult1, rresult2);

let mnr1 = 15;
let mnr2 = 10;
let mstr1 = "Hi";
let mnr3 = 3;
let mresult1 = mnr1 * mnr2;
let mresult2 = mstr1 * mnr3;
console.log(mresult1, mresult2);

let dnr1 = 30;
let dnr2 = 5;
let dresult1 = dnr1 / dnr2;
console.log(dresult1);

let pnr1 = 2;
let pnr2 = 3;
let presult1 = pnr1 ** pnr2;
console.log(presult1);

let nnr1 = 10;
let nnr2 = 3;
let result1 = nnr1 % nnr2;
console.log(`${nnr1} % ${nnr2} = ${result1}`);

let nr3 = 8;
let nr4 = 2;
let result2 = nr3 % nr4;
console.log(`${nr3} % ${nr4} = ${result2}`);

let nr5 = 15;
let nr6 = 4;
let result3 = nr5 % nr6;
console.log(`${nr5} % ${nr6} = ${result3}`);


let cnr1 = 4;
nr1++;
console.log(cnr1);

let cnr2 = 4;
cnr2--;
console.log(cnr2);

console.log("aqui esta la investigacion de el teorema de pitagoras")
alert("hola, puedes ingresar 2 numeros para hallar la ipotenusa")
let resul1 = prompt("ingrese su primer numero")
let resul2 = prompt("ingrese el siguiente numero")
console.log(Math.floor(Math.sqrt(resul1)))
console.log(Math.floor(Math.sqrt(resul2)))
let resul3 = resul1 + resul2
console.log(resul3)


