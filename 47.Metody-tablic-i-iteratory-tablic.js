/*
Metody tablic i iteratory tablic
.join()
.concat()
.map()
.forEach()
.filter()
.find() i findIndex()
*/

// Metoda join()
const users = ["adam", "bogdan", "czarek", "darek"];
// Metoda join - zwraca stringa z tablicy
const usersString = users.join(" ");
console.log(usersString); //"adam bogdan czarek darek"

// Metoda concat()
const users = ["adam", "bogdan", "czarek", "darek"];
// Metoda concat - łączymy tablicę z innym elementem (czy
// inną tablicą) i zwracamy nową tablicę.
const newUser = "edyta"
const allUsers = users.concat(newUser)
console.log(allUsers);
//["adam", "bogdan", "czarek", "darek", "edyta"]

// Operator spread - alternatywa dla metody concat()
const users = ["adam", "bogdan", "czarek", "darek"];
const allUsers = [...users, "edyta"]
console.log(allUsers);
//["adam", "bogdan", "czarek", "darek", "edyta"]