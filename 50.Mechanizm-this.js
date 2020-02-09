/*
Mechanizm this polega na wiązaniu słowa kluczowego this z obiektem.
Wiązanie to jest tworzone w chwili wywołania funkcji.
Wiązanie domyślnie następuje automatycznie, ale możemy je zmienić.
*/
"use strict"
const fn = function () {
    console.log(this);
}
fn()
//undefined

const car = {
    brand: 'opel',
    age: 2018,
    showAge() {
        console.log(`samochód z ${this.age}`);
    },
    showBrand: () => {
        console.log(`samochód marki ${this.brand}`);
    }
}
car.showAge() //samochód z 2018
car.showBrand() //samochód marki undefined (dziedziczy po
// zakresie wyższym a w zakresie wyższym jest window.Więc
// window.brand zwraca nam undefined)

// Mechanizm this - "problem 1"

const dog = {
    name: 'rocky',
    showName() {
        console.log("Imię psa to " + this.name);
    }
}
dog.showName() // Imię psa to rocky
const dogName = dog.showName
dogName() // Cannot read property 'name' of undefined

// Mechanizm this - "problem 2"

const cat = {
    kids: ['lucek', 'łapciuch'],
    showKidsNames() {
        console.log(`kot ma potomstwo: ${this.kids}`);
        const showKidsNumber = function () {
            console.log(this.kids.length);
        }
        showKidsNumber()
    }
}
cat.showKidsNames()
// showKidsNames - kot ma potomstwo: lucek, łapciuch
// showKidsNumber - Cannot read property 'kids' of undefined

// bind() - trwałe przypisanie this

/*
Jeśli potraktować tamte przykłady jako problem(nie jest to sam w sobie błąd
jezyka, ale może to stanowić dla nas utrudnienie), to możemy zastosować
trwałe, zdefiniowane wiązanie za pomocą metody bind.
    cat.showName() //wykonane na obiekcie cat, wiązanie domyślnie będzie do
obiektu cat.
    cat.showName.bind(dog) //zwraca nową funkcję o tej samej nazwie (nie
wywołuje jej), ale z przypisanym na stałe do this nowym obiektem.This nie
będzie się już definiować w chwili wywołania metody, ono będzie wtedy
miało przypisany do siebie obiekt dog. 
*/

// Mechanizm this - "problem 1 - rozwiązanie"

const dog = {
    name: 'rocky',
    showName() {
        console.log("Imię psa to " + this.name);
    }
}
dog.showName() // Imię psa to rocky
const dogName = dog.showName.bind(dog)
dogName() // Cannot read property 'name' of undefined Imię psa to rocky

// Mechanizm this - "problem 2 - rozwiązanie"

const cat = {
    kids: ['lucek', 'łapciuch'],
    showKidsNames() {
        console.log(`kot ma potomstwo: ${this.kids}`);
        const showKidsNumber = function () {
            console.log(this.kids.length);
        }.bind(this)
        showKidsNumber()
    }
}
cat.showKidsNames()
// showKidsNames - kot ma potomstwo: lucek,łapciuch
// showKidsNumber - 2

// Mechanizm this - "problem 2 - rozwiązanie (2)"

const cat = {
    kids: ['lucek', 'łapciuch'],
    showKidsNames() {
        console.log(`kot ma potomstwo: ${this.kids}`);
        const showKidsNumber = () => {
            console.log(this.kids.length);
        }
        showKidsNumber()
    }
}
cat.showKidsNames()
// showKidsNames - kot ma potomstwo: lucek,łapciuch
// showKidsNumber - 2