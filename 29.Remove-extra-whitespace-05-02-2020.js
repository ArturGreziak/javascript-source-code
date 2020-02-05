const phoneNumber = "+103123456";
phoneNumber.startsWith("+"); //true
phoneNumber.startsWith("10"); //false

function removeExtraWhitespace(text) {
    return text.trim();
}

//sample usage
console.log(removeExtraWhitespace(" What's up "));