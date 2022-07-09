// factorial of a number using recursion

var fact = function(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5));