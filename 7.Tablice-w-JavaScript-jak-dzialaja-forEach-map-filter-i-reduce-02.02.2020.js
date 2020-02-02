// const data = [1, 2, 3, 4, 5];

// const newData = data.forEach(function(n) {
//     console.log(n); -> Wynik nowa tablica [1, 2, 3, 4, 5]; stara wersja 
// });

// const newData = data.forEach(n => {
//     console.log(n);
// });

// console.log('Old', data);
// console.log('New', newData);

// const newData = data.map((n) => {
//     // return n * 2;
//     return n + '?';
// });

// console.log('Old', data);
// console.log('New', newData);

// const newData = data.filter((n) => {
// //    return true;
//     return n > 3; 
// });

// console.log('Old', data);
// console.log('New', newData);

// const newData = data.reduce((el, n) => {
//     return el + '-' + n;
// }, 'start-');

// console.log('Old', data);
// console.log('New', newData);

// const newData = data.reverse();

// console.log('Old', data);
// console.log('New', newData);

const products = [
    {
        name: 'Product 1',
        price: 299,
    },
    {
        name: 'Product 2',
        price: 50,
    },
    {
        name: 'Product 3',
        price: 15,
    },
];

// let list = '';

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 200) {
//         list += `${products[i].name} - ${products[i].price}\n`;
//     }
// }

// products.forEach((item) => {
//     if(item.price < 200) {
//         list += `${item.name} - ${item.price}\n`;
//     }
// });

// console.log(list);
/*
Wynik 
Product 2 - 50
Product 3 - 15
*/

// products.filter((item) => item.price < 200).forEach((item) => {
//     list += `${item.name} - ${item.price}\n`;
// });

const list = products.filter((item) => item.price < 200).map(item => `${item.name} - ${item.price}`).join('\n');

console.log(list);