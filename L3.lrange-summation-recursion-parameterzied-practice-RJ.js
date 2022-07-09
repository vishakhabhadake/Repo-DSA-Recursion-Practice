// summation of numbers from 1-N using parameterized method
// in parameterrized method, we pass the needed parameter as a param in the next function call
// in below example we are doing summation from N to 1
var summation = function(i,sum){
    if(i==0){
        console.log(sum);
        return;
    }
    summation(i-1,sum+i);
}

let num = 5;
summation(num,0);