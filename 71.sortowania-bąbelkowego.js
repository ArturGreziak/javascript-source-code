
var arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0 * 10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log('Kolejność liczb na tablicy przed sortowaniem to: ' + arr);

function uniqueSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

console.log('Kolejność liczb na tablicy po przeprowadzeniu sortowania bąbelkowego to: ' + uniqueSort(arr));