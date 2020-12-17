//FUNKTION 1
// const hello = function() { 
//     console.log('Hello world');
// }

// hello();

var breaker = '--------------------------------------------------';
console.log(breaker);

function helloArrow(theWorld) {
    console.log('Hello World');
} 

helloArrow();

console.log(breaker);

//FUNKTION 2
// const greet = function(name) {console.log(‘Hej ‘ + name + ‘ hur mår du?’);}

const greetArrow = (name = 'john') => {
    console.log(`Hej ${name} hur mår du?`);
}

greetArrow('Johnnyboy');
greetArrow();

console.log(breaker);
//FUNKTION 3
// const calc = function(numberOne, numberTwo) {return numberOne + numberTwo}

const calculatoreExtravagore = (numbaUn, numbaTu) => {
    return numbaUn + numbaTu;
}

console.log(calculatoreExtravagore(7, 9));

console.log(breaker);
//FUNKTION 4
// const tip = function(sum, percent) {let total = sum + sum * percent;return total;

const justTheTip = (kaffe, kaka, bulle, procent) => {
    let total = kaffe + kaka + bulle;
    let procentMath = procent / 100;
    let summa = total + total * procentMath;
    console.log(`Fikat kostade ${total} kr, om du dricksar ${procent}% så blir det
     ${total * procentMath} och slutsumman du ska betala är ${summa}`);
     return summa;
}

justTheTip(28, 17, 20, 28);