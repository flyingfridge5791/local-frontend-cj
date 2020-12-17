let age = 33; //global scope
var breaker = '--------------------------------------------------';

if(true) {
    let age = 55; //local scope, får samma värde i 1.1 blocket OM man inte deklarerat en ny variabel i det locala scopet med SAMMA namn.
    let name = 'jokke';
    console.log('inne i 1a kodblocket', age);
    console.log('inne i 1a kodblocket', name);
    console.log(breaker);

    if(true) {
        // let age = 60; //local scope, om den här finns med kommer console loggen bli 60 istället för 55.
        let name = 'jokke';
        console.log('inne i 1.1 kodblocket', age, ' det här fick jag från age = 55 i första if-satsen');
        console.log('inne i 1.1 kodblocket', name);
        var globalt = 'var';
        console.log(breaker);
    }
}

console.log('utanför något block', age);
console.log('utanför något block', name);
console.log('utanför något block', globalt);

console.log(breaker);


function hej() { //function läggs automatiskt längst upp  och läses därför in först. (hoisting)
    console.log('hej på dig');
}

const greet = function() {
    console.log("hur är lääääget?");
}

hej();
greet();
// tjenare(); //den här fungerar inte för '= function()' läggs inte automatiskt längst upp.

const tjenare = function() {
    console.log('tjenare');
}

tjenare(); //här fungerar den däremot, då funktionen kallas efter den deklarerats.

console.log(breaker);


let letName = 'joakim';

const greetings = function(name) {
    console.log('Hej ' + name + ' hur är läget?');
}

greetings('poop');

console.log(breaker);

const calc = function(num1, num2) {
    return num1 + num2;
}

let sum = calc(10, 15);
console.log(sum);

console.log(breaker);

//ARROW FUNCTION, bara annorlunda sätt att skriva det?

const greeters = namnet => {
    console.log(`Hej ${namnet} hur är läget?`);
}

//CALLBACK FUNCTION, nästlade funktioner?

const minFunktion = (callbackfunction) => {
    let val = 23;
    callbackfunction(val);
}

minFunktion(värdet => {
    console.log(värdet);
})

//på vanligt sätt skrivs den så här:

// const minFunk = function(callbackfunction) {
//     let val = 25;
//     callbackfunction(val);
// }

// minFunk(värde)
//     console.log(värde);
