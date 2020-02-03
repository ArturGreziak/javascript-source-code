const arr = [1, 2, 3, 4, 5, 6];
[a, b] = arr; // a = 1, b = 2
[a, ...b] == arr; // a = 1, b = [2, 3, 4, 5, 6]
const arr1 = [1, [2, 3]];
[a, b] = arr; // a = 1, b = [2,3]
[a, [b, c]] = arr; // a = 1, b = 2, c =3