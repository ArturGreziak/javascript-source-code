// Split Item Codes

// function splitCode(item) {
//     const arr = item.match(/([A-Z]+)(\d+)/);
//     return [arr[1], +arr[2]];
// }

// function splitCode(item) {
//     let index = item.split('').findIndex(c => !isNaN(c))
//     return [item.substring(0, index), Number(item.substring(index))]
// }

// const splitCode = item => [
//     item.match(/[a-z]+/i)[0],
//     Number(item.match(/[0-9]+/)[0]),
// ];

// splitCode("TEWA8392") ➞["TEWA", 8392]

// splitCode("MMU778") ➞["MMU", 778]

// splitCode("SRPE5532") ➞["SRPE", 5532]