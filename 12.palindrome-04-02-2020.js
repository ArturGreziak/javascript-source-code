function isPalindrome(n) {
    let tmp = n;
    let rn = 0;

    while (tmp) {
        rn = rn * 10 + (tmp % 10);
        tmp = Math.floor(tmp / 10);
    }

    return n == rn ? true : false;
}

console.log(isPalindrome(838));
console.log(isPalindrome(4433));
console.log(isPalindrome(443344));
// return Array.from(n).toString() === Array.from(n).reverse().toString()