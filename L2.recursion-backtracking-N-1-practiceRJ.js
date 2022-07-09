// print N to 1 using backtracking

var f = function(i,n){
    if(i>n) return;

    f(i+1,n);
    console.log(i);
}

let n = 10;
f(1,n);