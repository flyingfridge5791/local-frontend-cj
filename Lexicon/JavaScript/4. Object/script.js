const user = { //ett objekt
    firstName: 'Joakim',
    lastName: 'Wahlström',
    Age: 33,
    address: { //ett objekt i ett objekt
        street: 'en gata',
        nr: 12,
        zipCode: '72345',
        city: 'västerås'
    },
    phoneNumbers: [
        '076-0254452',
        '070-2424895'
    ],
    isActive: true
}

let key = 'Age';

console.log(user); //hämtar hela objektet
console.log(user.address.city); //går in och hämtar specifika delar, använder punkter för att gå djupare i 'nestled objects'
console.log(user['lastName']);
console.log(user[key]);
console.log(key);

user.firstName = 'Jeanette';
console.log(user.firstName);

user.email = 'joakim.wahlstrom@lexicon.se';
console.log(user); 

const { firstName, lastName, address: { city } } = user;

console.log(firstName);
console.log(lastName);
console.log(city);