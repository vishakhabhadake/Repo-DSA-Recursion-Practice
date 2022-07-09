// print the number 1-N using backtracking
let n = 4;

var f = function (i, n) {
  if (i < 1) {
    return;
  }
  f(i-1,n); // first call the function then print the number
  console.log(i);
};

f(n, n);
