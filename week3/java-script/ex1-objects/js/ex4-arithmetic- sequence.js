function createSequence(d) {
    let sequ = {
        d: d,
        printElements: function (x) {
            var arithmeticSequence = [0]
            for (var i = 1; i <= x; i++) {
                arithmeticSequence[i] = arithmeticSequence[i-1]+d;
                
            }
            return arithmeticSequence;
        }
    }
    return sequ;
}

var sequence = createSequence(10);
var arr = sequence.printElements(19);
console.log(arr);