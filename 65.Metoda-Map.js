function capMe(arr) {
    return arr.map(x => x[0].toUpperCase() + x.toLowerCase().slice(1));
}

const capMe = arr => arr.map(x => x[0].toUpperCase() + x.toLowerCase().slice(1));