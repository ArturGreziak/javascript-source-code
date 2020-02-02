const nums = [2, 4, 6, 11];
let d = "50%";
let map1 = nums.map(x => x * ((d).slice(0, -1) / 100));
console.log(map1);
// expected output: Array [2, 8, 18, 32]
// 