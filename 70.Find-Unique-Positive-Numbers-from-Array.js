const arr = [3, -3, -3, 5, 5, -6, -2, -4, -1, 3];
const result = arr.filter(word => word > 0);
console.log([...new Set(result)]);