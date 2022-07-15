/*  Sum subrray using recusion only one answer   */

/* The trick is, whenever you get answer, just stop the recusrion  */

function printS(ind, subArr, tempSum, sum, inputArr, n) {
    if(ind==n){
        if(tempSum ==sum){
            console.log(subArr);
            return true;
        }else{
            return false;
        }
        
    }

    subArr.push(inputArr[ind]);
    tempSum +=inputArr[ind];
    if(printS(ind+1,subArr,tempSum,sum,inputArr,n)==true) {
        return true;
    }

    tempSum-=inputArr[ind];
    subArr.pop(inputArr[ind]);
    if(printS(ind+1,subArr,tempSum,sum,inputArr,n)==true){
        return true;
    }

    return false;
}

let inputArr = [1, 2, 1];
let sum = 2;
let n = inputArr.length;
let tempSum = 0; // initialSum

printS(0, [], tempSum, sum, inputArr, n);
