const drinks = ["lemonade", "beer", "water", "fanta", "cola"];                          // ["fanta", "cola", "water"];

const result = drinks.filter(word => !(word == "fanta" || word == "cola"));

console.log(result);