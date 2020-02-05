/*
String starts with a substring
Complete the function amsterdamIsFirstWord such that it returns true when "Amsterdam" is the first word in the description it receives, and false otherwise.
*/
function amsterdamIsFirstWord(description) {
    return description.startsWith("Amsterdam") ? true : false;
}

//sample usage
console.log(amsterdamIsFirstWord("Amsterdam is the capital of NL"));