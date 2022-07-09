// summation using function returning a value 

var summation = function(n){
    if(n==0){
        return 0;
    }
    return n + summation(n-1);
}
console.log(summation(5));