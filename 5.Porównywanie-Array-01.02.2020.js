const a1 = [1, 3, 4, 4, 4];                 
const uniqueArray = [...new Set(a1)];
const a2 = [2, 5, 7];
const uniqueArray2 = [...new Set(a2)];
console(uniqueArray.length == uniqueArray2.length);
/*Obiekt typu Set został 
wprowadzony w ES6 i razem z …, operatorem 
spread, możemy go użyć by stworzyć nową 
tablicę zawiarającą tylko unikalne wartości
*/