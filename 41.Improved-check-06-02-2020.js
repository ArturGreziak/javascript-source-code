/*
Improved check
Implement a function canVote that returns true whenever the age is bigger than or equal to 18 and returns false in other scenarios
*/
function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

//sample usage
console.log(canVote(25));