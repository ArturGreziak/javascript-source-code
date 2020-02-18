function isSymmetrical(num) {
    return num.toString().split("").reverse().join() == num.toString().split("");
}

console.log(isSymmetrical(7227)); // ➞ true

console.log(isSymmetrical(12567)); // ➞ false

console.log(isSymmetrical(44444444)); // ➞ true

console.log(isSymmetrical(9939)); // ➞ false

console.log(isSymmetrical(1112111)); // ➞ true