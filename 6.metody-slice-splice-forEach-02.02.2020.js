// -> arr.slice(begin, end); domyślne wartości 0 i arr.length nie modyfikuje tylko zwraca nową tablice.
const myArrey = [1,2,3,4,5,6,7,8];
console.log(myArrey.slice(5));
console.log(myArrey.slice(3, 7));
//--------------------------------//
// -> arr.splice(begin, deleteCount); metoda mutuje tablicę arr.splice(begin, deleteCount, item, ...);
// metoda pozwala nam mutować tablice dodawać nowe elemęty 

const myArrey2 = [1, 2, 3, 4, 5, 6, 7, 8];

// myArrey2.splice(5);

// myArrey2.splice(3, 4);

// myArrey2.splice(1, 5);

// myArrey2.splice(5,0, 'Artur');

myArrey2.splice(1, 5,...['o','k','i']);

// begin = 0
// deleteCount = 
console.log(myArrey2);
//--------------------------------------//
// arr.forEach(function callback(currentValue, index){
   // function body
// });
const myArrey3 = [1,2,3,4];

myArrey3.forEach((el, i) => {             // '1 po pierwszej 0 index iteracji'
   console.log(`${el} is at ${i}  index`) // '2 po drugiej 1 index iteracji'
});                                       // '3 po trzeciej 2 index iteracji'
                                          // '4 po czwartej 3 index iteracji'