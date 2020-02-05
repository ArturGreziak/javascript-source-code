/*
Is odd
Complete the function isOdd such that it returns true when x is odd. Try not to use an if statement. Simply write the condition that you think will return an even number. We'll explain later why this works
*/
function isOdd(x) {
    return (x % 2 != 0) ? true : false;;
}

//sample usage
console.log(isOdd(4));
console.log(isOdd(5));
console.log(isOdd(6));