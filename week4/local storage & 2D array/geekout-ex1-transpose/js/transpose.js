let originArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9]];
function transposeArry(array2D) {
    return Object.keys(array2D[0]).map(function(c) {
        return array2D.map(function(r) { return r[c]; });
    });
  
}
console.log(transposeArry(originArr));

