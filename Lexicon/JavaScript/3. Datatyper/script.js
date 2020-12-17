















//----------------//
/*
let doNotUse = "Joakim";
let useThis = 'Joakim';
let number = 33;

console.log(useThis, number);

let withoutPlaceHolders = 'Mitt namn är ' + useThis + ' och jag är ' + number + ' år gammal.';

console.log(withoutPlaceHolders);

//alert('lol');

let firstName = 'Joakim';
let lastName = 'Wahlström';
let fullName = firstName + ' ' + lastName;

console.log(fullName);
*/

let datatype; //deklarerar en variabel, utan att ge den något värde.
// let datatype, datatype2, datatype3; //deklarerar flera variabler.

// console.log(typeof dataype); //undefined

datatype = 'en text';
// console.log(typeof datatype); //string, blir det automatiskt beroende på vilket värde man ger den.

let name = 'Christopher Jernberg';

// console.log(name);

let fullName = name.split(' ');

// console.log(fullName);

let firstName = fullName[0];
let lastName = fullName[1];

// console.log(firstName + ' är mitt förnamn');
// console.log(lastName + ' är mitt efternamn');


let nr1 = 10;
let nr2 = 2.5;

// console.log(nr1, nr2);
// console.log(nr1 + nr2);
// console.log(nr1 - nr2);
// console.log(nr1 * nr2);
console.log(nr1 ** nr2);
// console.log(nr1 % nr2);

nr1 = nr1 + 1;
console.log(nr1);
nr1 += 1;
console.log(nr1);
nr1 ++;
console.log(nr1);

//dessa tre gör samma sak

console.log(nr1);

