/*
Metody iterujące po tablicach
map()
forEach()
filter()
find()
findIndex()
*/

// map() - przykład 1
// Metoda map zwraca nową tablicę o tej samej długości
const users = ["adam", "bogdan", "czarek", "darek"];
const usersFirstLetterUpperCase = users.map(user =>
    user[0].toUpperCase())
console.log(usersFirstLetterUpperCase);
// ["A", "B", "C", "D"]

// map() - przykład 2
// Metoda map zwraca nową tablicę o tej samej długości
const numbers = [2, 3, 4]
const doubleNumber = numbers.map(number => number * 2)
console.log(doubleNumber);

// forEach() - przykład 1
// forEach - pracuje na tablicy, nie zwraca nowej (zwraca undefined)
const usersAge = [20, 21, 23, 43];
usersAge.forEach(age => console.log(`W przyszłym roku
użytkownik będzie miał ${age + 1} lat`))

// forEach() - przykład 2
const usersAge = [20, 21, 23, 43];
let usersTotalAge = 0;
usersAge.forEach(age => usersTotalAge += age);
console.log(usersTotalAge);
//zmienna zawiera wartość 107

// forEach() - przykład 3
const usersAge = [20, 21, 23, 43];
const section = document.createElement('section')
usersAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<h1> Użytkownik ${index + 1}</h1>
<p>wiek: ${age}</p>`
    )
    if (index === array.length - 1) {
        document.body.appendChild(section);
    }
})

// filter() - przykład 1
//Zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true
const users = ["adam", "bogdan", "czarek", "darek"];
const NameWith6Letter = users.filter(user => user.length === 6)
console.log(NameWith6Letter);
//["bogdan", "czarek"]

// filter() - przykład 2(z wykorzystaniem indexOf)
//Zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true
const users = ["adam", "bogdan", "czarek", "darek"];
const NameWithLetterK = users.filter((user) => {
    return (
        user.indexOf("k") > -1
    )
})
console.log(NameWithLetterK);
//["czarek", "darek"]

// filter() - przykład 2(z wykorzystaniem indexOf)
//Zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true
const users = ["adam", "bogdan", "czarek", "darek"];
const NameWithLetterK = users.filter(user => user.indexOf("k") > -1)
console.log(NameWithLetterK);
//["czarek", "darek"]

// findIndex()
    // Metoda findIndex zwraca indeks elementu, który jako pierwszy zwróci true
   // (spełnia warunek).Jeśli w żadnej iteracji nie będzie spełniony warunek, to zwróci - 1
const customers = [
    { name: "Adam", age: 67 },
    { name: "Basia", age: 27 },
    { name: "Marta", age: 17 },
];
const isUsersAdult = customers.findIndex(customer => customer.age < 18)
console.log(isUsersAdult); //2

find()
// Metoda find zwraca element, który jako pierwszy zwróci true (spełnia warunek).
// Jeśli w żadnej iteracji nie będzie spełniony warunek, to zwróci undefined.
const customers = [
    { name: "Adam", age: 67 },
    { name: "Basia", age: 27 },
    { name: "Marta", age: 17 },
];
const firstAdultUser = customers.find(customer => customer.age >= 18)
console.log(firstAdultUser); //{name: "Adam", age: 67}