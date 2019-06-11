function myCalc(num) {
    var sum = 0;
    return function (number) {
        sum += num;
        console.log(sum);
        return sum
    }
}
//  just an example for calling the function : 
var continuousSum = myCalc(4);
for (let index = 0; index < 10; index++) {
    continuousSum(index*2);
}
