/*  Sum subrray using recusion    */

function printS(ind, subArr, tempSum, sum, inputArr, n) {
    if(ind==n){
        if(tempSum ==sum){
            console.log(subArr);
        }
        return;
    }

    subArr.push(inputArr[ind]);
    tempSum +=inputArr[ind];
    printS(ind+1,subArr,tempSum,sum,inputArr,n);

    tempSum-=inputArr[ind];
    subArr.pop(inputArr[ind]);
    printS(ind+1,subArr,tempSum,sum,inputArr,n)
}

let inputArr = [1, 2, 1];
let sum = 2;
let n = inputArr.length;
let tempSum = 0; // initialSum

printS(0, [], tempSum, sum, inputArr, n);
