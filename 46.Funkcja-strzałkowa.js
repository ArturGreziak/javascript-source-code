// Funkcja strzałkowa

const fn = (item) => {
    console.log("Podany argument to " + item)
}
fn("Hej!")

const fn = function () {
    console.log("Podany argument to " + item)
}

const fn = item => console.log("Podany argument to " + item)
fn("Hej!") // "Podany argument to Hej"
// to samo
const fn = (item) => {
    return console.log("Podany argument to " + item)
}

const fn = (item) => {
    return console.log("Podane argument to " + item)
}
//----------- to samo----------
const fn = (item) => console.log("Podany argument to " + item)
//----------- to samo----------
const fn = (item) => (
    console.log("Podany argument to " + item)
)

const fn = (item, item2) => {
    return `Podany argument to: ${item} i ${item2}`
}
const result = fn("Hej!", "Ho!")
// result zawiera "Podany argument to: Hej! i Ho!"
//----------- to samo poniżej
const fn = (item, item2) => (
    `Podany argument to: ${item} i ${item2}`
)
const result = fn("Hej!", "Ho!")

const btn = document.querySelector('button');
btn.addEventListener('click', () => console.log(this));
//this będzie wskazywało na window (obiekt globalny). Musisz pamiętać, że
/*
funkcja strzałkowa nie tworzy własnego przypisania wiązania this, a zamiast
tego je dziedziczy(czyli przejmuje this, który istnieje we wcześniejszym
kontekście)
*/
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    console.log(this)
})
//this będzie wskazywał na obiekt, na którym wywołane zostało zdarzenie