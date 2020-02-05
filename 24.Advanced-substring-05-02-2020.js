function getThreeChars(name) {
    //start from the 2nd character
    const tekt = "Hello";
    return name.substring(1, 4);
}

//sample usage
console.log(getThreeChars("Hello"));

const language = "JavaScript";
language.substring(1, 4); //"ava"

language.substring(4); //"Script"