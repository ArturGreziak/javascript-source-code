const myArray = [1,2,3,4,5];
const myArray2 = ['A','B','C','D'];
myArray.pop(); // pop -> odejmuje z tyłu tablcy polecenia mmutują tablicę
console.log(myArray);

myArray.push('Artur');
console.log(myArray); // push -> polecenia mmutują tablicę dodaję na końcu element

// shift -> odejmue element na początku tabliczy 
myArray.shift();
console.log(myArray);
// unshift -> dodaje element na początku tabliczy
myArray.unshift('Greziak');
console.log(myArray);

const myArray3 = myArray.concat(myArray2); // concat -> łaczy dwie tablice
console.log(myArray3);