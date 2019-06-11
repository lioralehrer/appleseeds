function checkArray(array) {
    var arr = array;
    var newArr = [];
    var check = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i < arr.length - 1; i++) {
        var decrease = Math.abs(arr[i] - arr[i + 1]);
        if (check > decrease) {
            newArr[0] = arr[i];
            newArr[1] = arr[i + 1];
        }
    }
    return newArr;
}


var x = checkArray([2, 7, 24, 25, 30, 80]);
console.log(x);