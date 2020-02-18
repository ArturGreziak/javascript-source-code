// 'The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1));
function findZip(str) {
    let term = 'zip';
    let firstIdx = str.indexOf(term);

    return str.indexOf(term, firstIdx + term.length);
}
console.log(findZip("all zip files are zipped")); // ➞ 18
console.log(findZip("all zip files are compressed")); // ➞ -1
console.log(findZip("all zip files are zipped")); //  18)
console.log(findZip("all zip files are compressed")); // -1)
console.log(findZip("We believe university-level zip education can be both high quality and low cost. Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world.")); // -1)
console.log(findZip("Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms.")); 
// 169
