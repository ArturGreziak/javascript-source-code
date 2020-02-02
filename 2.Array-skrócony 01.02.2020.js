const arr = [0, 2, 4, 6];
let tab = [...arr, ...arr.reverse().slice(1)]; // Skrócony zapis na tablicach.
[...[0, 2, 4, 6], ...[0, 2, 4, 6].reverse().slice(1)];