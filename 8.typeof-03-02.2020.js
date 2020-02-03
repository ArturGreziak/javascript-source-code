function stupidAddition(a, b) {
    if (typeof a == 'string' && typeof b == 'string') {
        return 3;
    } else if (typeof a == 'number' && typeof b == 'number') {
        return '12';
    } else {
        return null;
    }
}
console.log(stupidAddition(1, 2));

console.log(stupidAddition("1", "2"));

console.log(stupidAddition("1", 2));

console.log(stupidAddition(1, "2"));