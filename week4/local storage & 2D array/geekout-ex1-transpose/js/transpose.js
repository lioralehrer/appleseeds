let originArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9]];
function transposeArry(array2D) {
    return Object.keys(array2D[0]).map(function(c) {
        return array2D.map(function(r) { return r[c]; });
    });
  
}

// 
// build my transpose:
function transpose(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (newArray[j] === undefined) {
                newArray[j] = [];
            }
            newArray[j][i] = array[i][j];
        }
    }
    return newArray;
 }
 console.log(transposeArry(originArr));
 console.log(transpose(originArr));

