let arr10 = [[1, 2], [3, 4, 5, 6], [7], [8, 9, 10]];
function getnum(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);

        }
    }
}
getnum(arr10);

function getRowsSum(arr) {
    let sumArr = [];
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];                   
        }
       sumArr[i]=sum; 
    }
    console.log(sumArr);
}
getRowsSum(arr10);


