const namesArray = ['bob', 'parr', 'john', 'ana', 'liam', 'jack'];
var breaker = '--------------------------------------------------';
let numberOfUsers = 0;

for (let i = 0; i < namesArray.length; i++) {
    console.log(i);
    console.log(i, namesArray[i]);
}

console.log(breaker);

for( name of namesArray) {
    console.log(name);
}

console.log(breaker);

let i = 1;
do {
    console.log('do while: ' + i)
    i++
} while (i < 8)

console.log(breaker);

console.log(i);

console.log(breaker);


// FUNKAR LIKA DANT
namesArray.forEach(function(ETTNAMN) {
    console.log(ETTNAMN);
})

console.log(breaker);

namesArray.forEach((ETTANNATNAMN => {
    console.log(ETTANNATNAMN);
}))
//FUNKAR LIKA DANT

console.log(breaker);

// namesArray.forEach(function(user){
//     console.log(user);
// })

// namesArray.forEach(user =>{
//     console.log(user.name, user.age, user.email);
//     numberOfUsers ++;
// })

// KOPIERA JOAKIMS

console.log(breaker);

