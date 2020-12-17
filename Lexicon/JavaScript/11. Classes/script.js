const jsObj = {};

const obj1 = {
    id: '1',
    firsName: 'Joakim',
    lastName: 'Wahlström',
    email: 'joakim.wahlström@lexicon.se',
    loggedIn: false,
    login: function() {
        this.loggedIn = true;
        console.log (`${this.firstName} has logged in`)
    },
    logout() {
        this.loggedIn = false;
        console.log (`${this.firstName} has logged out`)
    }

}

// obj1.login();
// console.log(obj1.loggedIn)
// obj1.logout();
// console.log(obj1.loggedIn)

class JsClass {}

class Class1 {
    firstName = 'Joakim'
}

let cls1 = new Class1();
let cls2 = new Class1();

// console.log(cls1, cls2)

class User {
    constructor(firstNameInputParameter = 'förnamn', lastnameInputParameter = 'efternamn') {
        this. firstName = firstNameInputParameter;
        this. lastName = lastnameInputParameter;
        this.loggedIn = false;
    }
    login() {
        this.loggedIn = true;
        console.log(`${this.firstName} has logged in`)
        return this;
    }
    logout() {
        this.loggedIn = false;
        console.log(`${this.firstName} has logged out`)
        return this;
    }
    funk() {
        console.log(`${this.firstName} gjorde precis något coolt.`)
        return this;
    }
}

let userOne = new User('Joakim', 'Wahlström');

console.log(obj1);
console.log(userOne);

var breaker = '--------------------------------------------------';
console.log(breaker);

let userTwo = new User();

console.log(userOne, userTwo);

userOne.login();
userTwo.login();

console.log(breaker);

userOne.login().funk().logout(); 
//chainade funktioner, kräver 'return this;' på funktionen
// så att man får tillbaks ett värde som nästa funktion görs på.

console.log(breaker);

//man kan lägga in en konstruktor, annars används konstruktorn i classen som blir extendad
// i detta fall, 'User'.
class Admin extends User {
    removeUser(user) {
        users = users.filter(u => {
            return u.firstName != user.firstName;
        })
    }
}

let admin = new Admin('Admin', 'Wahlström');

let users = [userOne, userTwo, admin]

admin.login();

console.log(breaker);

console.log(users)

admin.removeUser(userTwo);
console.log(users);

function PrototypeUser(firstNameInput, lastNameInput) {
    this.firstName = firstNameInput
    this.lastName = lastNameInput
    this.loggedIn = false
    this.login = function() {
        this.logginIn = true
        console.log(`${this.firstName} has logged in`)
    }
}

let userThree = new PrototypeUser('Jack', 'Wahlström');

userThree.login()

console.log(userThree)