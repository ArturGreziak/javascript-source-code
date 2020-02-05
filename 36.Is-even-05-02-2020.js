/*
Is even
Complete the function isEven such that it returns true when x is even. Try not to use an if statement. Simply write the condition that you think will return an even number. We'll explain later why this works
*/
function isEven(x) {
    return (x % 2 === 0) ? true : false;
}

//sample usage
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));