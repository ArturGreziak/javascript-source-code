function addOddToN(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            result += i;
        }
    }
    return result;
}
console.log(addOddToN(5)); //➞ 9
// 1 + 3 + 5 = 9
console.log(addOddToN(13)); //➞ 49