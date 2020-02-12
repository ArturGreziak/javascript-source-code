function squaresSum(n) {
let suma = 0;
for(let i = 0; i <= n; i++){
   suma += Math.pow(i, 2);
    }
    return suma;
}
console.log(squaresSum(3));
console.log(squaresSum(12));
console.log(squaresSum(13));