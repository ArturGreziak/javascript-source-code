// const user = {
//     name : 'Lily',
//     test() {
//         console.log(this.name)
//     }
// }
// user.test();

function User(name, age){
    this.name = name;
    this.age = age;

this.hello = function(){
    console.log(`Użytkownik ma na imię ${this.name} i ma  ${this.age} lat.`);
    }

}

const newUser = new User('Klaudia', 23);

// const user = {
//     name : 'Klaudia',
//     age : 23
// }

newUser.hello()