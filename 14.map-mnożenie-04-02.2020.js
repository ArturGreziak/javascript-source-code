function getMultipliedArr(arr) {
  return  arr.map(el => el * 2);
}
console.log(getMultipliedArr([2, 5, 3]), [4, 10, 6]);
console.log(getMultipliedArr([1, 86, -5]), [2, 172, -10]);
console.log(getMultipliedArr([5, 382, 0]), [10, 764, 0]);

const getMultipliedArr = arr => arr.map(el => el * 2); // Funkcja strzalkowa.