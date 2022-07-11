// find fibonacci with multiple recursion
// 0 1 1 2 3 5 8
function f(n){
    if(n<=1) {
        // console.log(n)
        return n;

    }
    
    let flast = f(n-1);
    let secLast = f(n-2);
    return flast + secLast;
}
console.log(f(6));

// time complexity : 2(n);

