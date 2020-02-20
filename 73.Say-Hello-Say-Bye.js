

function sayHelloBye(name, num) {

if(num === 1){
    return "Hello " + name[0].toUpperCase() + name.toLowerCase().slice(1);;
} else if(num === 0){
    return "Bye " + name[0].toUpperCase() + name.toLowerCase().slice(1);;
}
}
console.log(sayHelloBye("artur", 1)); //➞ "Hello Artur"

console.log(sayHelloBye("alon", 1)); //➞ "Hello Alon"

console.log(sayHelloBye("Tomi", 0)); // ➞ "Bye Tomi"

console.log(sayHelloBye("jose", 0)); // ➞ "Bye Jose"