function addIndexes(arr) {
  return arr.map((el, index) => el + index)
}

console.log(addIndexes([0, 0, 0, 0, 0])); //➞[0, 1, 2, 3, 4]

console.log(addIndexes([1, 2, 3, 4, 5])); //➞[1, 3, 5, 7, 9]

console.log(addIndexes([5, 4, 3, 2, 1])); //➞[5, 5, 5, 5, 5]

/*
1. tworzysz tablicę z cyframi,
2. tworzysz funkcję, w której podajesz argument (nazwa dowolna),
3. wewnątrz funkcji odwołujesz się do tego argumentu, na nim robisz .map ,
4. map przyjmuje 2 argumenty - liczbę z tablicy oraz indeks,
5. wystarczy dodać do siebie liczbę z tablicy + indeks,
6. podczas wywołania funkcji, jako argument podajesz nazwę tablicy, w której przechowujesz cyfry
*/