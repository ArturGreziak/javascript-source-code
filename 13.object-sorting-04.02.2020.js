// const drinks = [
//     { name: 'lemonade', price: 90 },
//     { name: 'lime', price: 432 },
//     { name: 'peach', price: 23 }
// ];


// const tab = [1,4,7,2,0];
// console.log(tab.sort()); // sortowanie leksykonalne.

// const arr = [2, 3, 4, 6, 7, 8, 32, 44, 65, 71, 200, 440, 803];

// console.log(arr.sort((a,b) => a - b));    

// console.log(arr.sort((a,b) => b - a));      // [803, 440, 200, 71, 65, 44, 32, 8, 7, 6, 4, 3, 2]

// function sortDrinkByPrice(drinks) {
//     return drinks.sort((a, b) => a.price - b.price);
// }

const drinks = [
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'peach', price: 23 }
];

// let arrObj = [
//     { name: 'lemonade', price: 90 },
//     { name: 'lime', price: 432 },
//     { name: 'peach', price: 23 }
// ];
console.log(drinks.sort((a, b) => a.price - b.price));

// a = { name: 'lemonade', price: 90 }
// a.price === 90;