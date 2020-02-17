function isOmnipresent(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(num) == -1) {
            return false;
        }
    }

    return true;
}

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true

// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false