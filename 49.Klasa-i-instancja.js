// Klasa i instancja
//deklaracja klasy
class City {
}
//tworzenie instancji klasy
const Warsaw = new City();
const NewYork = new City();
// Powstają dwa (różne, niepołączone) obiekty będące
// instancją City.
// City{}

// Klasa - właściwości instancji i prototyp
class Country {
    // constructor() {}
}
const poland = new Country();

// Klasa - właściwości instancji i prototyp
class Country {
    constructor(name, capital, population) {
        this.name = name;
        this.capital = capital;
        this.popultion = population;
    }
}
const poland = new Country('Polska', 'Warszawa', 38000000);
//Country {name: "Polska", capital: "Warszawa", popultion: 38000000}

// Klasa - właściwości instancji i prototyp
class Country {
}
const poland = new Country('Polska', 'Warszawa', 38000000);
// poland (object)
/*
1.capital: "Warsawa"
2.citizensNumber: 38000000
3.name: "Polska"
4.__proto__: Object
*/

// Klasa - dodawanie metod do prototypów i instancji
class Country {
    constructor(name) {
        this.name = name; //właściwość każdej instancji
        this.showName = () => console.log(this.name); //metoda każdej instancji
    }
    //Wszystkie metody tworzone w klasie znajdują się w prorotypie klasy, do której dostęp mają wszystkie
    // instancje.
    showCountryName() {
        console.log(`Nazwa kraju to ${this.name}`);
    }
}
const Poland = new Country('Polska');
const Italy = new Country('Italia');
Poland.showCountryName(); // Nazwa kraju to Polska
Italy.showCountryName(); // Nazwa kraju to Italia
Poland.showName(); // Polska
Italy.showName(); // Italia

// Klasa - dodawanie metod do prototypów i instancji
class Country {
    constructor(name) {
        this.name = name;
        this.showName = () => console.log(this.name);
    }
    showCountryName() {
        console.log(`Nazwa kraju to ${this.name}`);
    }
}
const Poland = new Country('Polska');
Poland.showCountryName(); // Nazwa kraju to Polska
Poland.showName(); // Polska

// Klasa - metody prototypu czy instancji ?
    class Country {
        constructor(name) {
            this.name = name;
            this.showCountryName = function () {
                console.log("Metoda w instancji wskazuje: " + this.name);
            }
        }
        showCountryName() {
            console.log(`Metoda w prototypie wskazuje ${this.name}`);
        }
    }
const Poland = new Country('Polska');
Poland.showCountryName(); // Metoda w instancji wskazuje Polska

// Klasa - dziedziczenie
class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Imię osoby to ${this.name}`);
    }
}

class Student extends Person {
    constructor(name = "", degrees = []) {
        super(name)
        this.degrees = degrees
    }
    showDegrees() {
        const completed = this.degrees.filter(degree => degree > 2)
        console.log(`Studen ${this.name} ma stopnie: ${this.degrees} i zaliczył już ${completed.length} przedmiotów`);
    }
}
const Janek = new Student("Adam", [2, 3, 4, 5, 2, 3])
Janek.showDegrees() // Student Adam ma stopnie: 2,3,4,5,2,3 i zaliczył już 4 przedmiotów

