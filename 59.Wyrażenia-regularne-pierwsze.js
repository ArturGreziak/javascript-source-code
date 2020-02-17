function upper_case(str) {
    regexp = new RegExp('a+.*c+');
    if (regexp.test(str)) {
        return true;            
    }
    else {
        return false;  
    }
}
console.log(upper_case("account"));
console.log(upper_case("abccount"));
console.log(upper_case("abbbccount"));
console.log(upper_case("bbbccount"));
console.log(upper_case("ccount"));
console.log(upper_case("abbount"));
// 1.Jakie znaki dopasuje wyrażenie [A-Ź]? Odp. Ciężko stwierdzić  na pierwszy rzut oka, ale znacznie więcej niż mógłby się wydawać.
// 2.Który wzorzec dopasuje wszystkie cyfry z wyjątkiem 7? Odp. -> [^\D7]
// 3.Która flaga sprawia, że kropka dopasowuje również końce linii ? Odp. -> single line(s)

// function is_dateString(str) {
//     regexp = %qout;01/01/2015%qout; // /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_dateString("01/01/2015"));

// console.log(is_dateString("01/22/2015"));

// console.log(is_dateString("32/01/2015"));


// function is_alphaNumeric(str) {
//     regexp = /^[A-Za-z0-9]+$/;

//     if (regexp.test(str)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(is_alphaNumeric("37828sad"));

// console.log(is_alphaNumeric("3243#$sew"));