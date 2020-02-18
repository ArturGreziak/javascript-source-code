
var arr = [6, 7, 3, 2, 1, 0];

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