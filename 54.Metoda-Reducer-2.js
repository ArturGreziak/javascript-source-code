function isAvgWhole(arr) {
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return (arr.reduce(reducer) / arr.length) % 1 === 0;
}
console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));

