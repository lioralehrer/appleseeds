// iterate over array and print

let arr01 = [[1, 2, 3], [4, 5], [6, 7, 8], [9]];

function getNum(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}

console.log(getNum(arr01));

