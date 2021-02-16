const array = [
    namn1 = 'John',
    namn2 = 'christopher',
    namn4 = 'Elin',
    namn4 = 'Frida',
    namn5 = 'Muhammed'z
]

console.log(array);

var breaker = '--------------------------------------------------';
console.log(breaker);

array.pop()
console.log(array);

console.log(breaker);

array[1] = 'Ove';

console.log(array);
console.log(breaker);

array.push('Joakim');
console.log(array);

console.log(breaker);

array.sort();

console.log(array);

console.log(breaker);

console.log(array.indexOf('Joakim'));

console.log(breaker);

array.splice(2,1);

console.log(array);

console.log(breaker);

for (let i = 0; i < array.length; i++) {
    console.log(i + ' : ' +  array[i]);
}



