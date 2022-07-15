/*  Sum subrray using recusion only one answer   */

/* The trick is, whenever you get answer, just stop the recusrion  */

function printS(ind, tempSum, sum, inputArr, n) {
  if (ind == n) {
    if (tempSum == sum) {
      // console.log(subArr);
      return 1;
    } else {
      return 0;
    }
  }

  tempSum += inputArr[ind];
  let left = printS(ind + 1, tempSum, sum, inputArr, n);

  tempSum -= inputArr[ind];

  let right = printS(ind + 1, tempSum, sum, inputArr, n);

  return left + right;
}

let inputArr = [1, 2, 1];
let sum = 2;
let n = inputArr.length;
let tempSum = 0; // initialSum

console.log(printS(0, tempSum, sum, inputArr, n));
