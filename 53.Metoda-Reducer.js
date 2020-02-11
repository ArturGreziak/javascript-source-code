function mysteryFunc(num) {
let array1 = num.toString().split("");
const reducer = (accumulator, currentValue) => accumulator * currentValue;
return (array1.reduce(reducer));
}
console.log(mysteryFunc(152));
console.log(mysteryFunc(832));
console.log(mysteryFunc(19));
console.log(mysteryFunc(133));