
const array = [0, 1, 2, 3, 4];
console.log(array);

//dålig praxis, blanda inte olika typer i samma array
const multiArray = ['12', 12, true, {firstName: 'Joakim'}, ];
console.log(multiArray);


const users = [
    {firstName: 'Joakim', lastName: 'Wahlström', age: 73 },
    {firstName: 'Christ', lastName: 'Jern', age: 29 },
    {firstName: 'axel', lastName: 'Ros', age: 15 },    
];

const names = ['Joakim', 'Christ', 'Jack'];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(users[1].firstName);

//lägg till i början av en array
names.unshift('Colin');
console.log('med unshift: ' + names)

//ta bort i början av en array
names.shift();
console.log('med shift: ' + names);

//lägga till i slutet av en array
names.push('Anna');
console.log('med push ' + names);

//ta bort i slutet av en array
names.pop();
console.log('med pop: ' +  names);

//byta värde på en plats i arrayen
names[1] = 'Nytt namn'
console.log('Ändrat: ' + names);

console.log(names.indexOf('Jack'));

console.log(names.length);

const enTillArray = []
console.log(names.concat(['Colin', 'Jeanette']).length);
console.log(names);
