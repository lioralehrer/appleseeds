// let expect = require('chai').expect;

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
function transposeArry(array2D) {
    return Object.keys(array2D[0]).map(function(c) {
        return array2D.map(function(r) { return r[c]; });
    });
  
}


it('should return transformed array', function () {
    // arrange:
    let matrix = [[1,2][3,4]];
    let tmartix = [[1,3],[2,4]];
    // act:
    let result = transpose(matrix);
    let nresult = transposeArry(matrix);
    // assert
     expect(result).to.deep.equal(tmartix);
    // expect(nresult).to.deep.equal(tmartix);
}
);