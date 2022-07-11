function f(i,arr,seqArr,n){
    if(i>=n){
        console.log(seqArr);
        return;
    }
    f(i+1,arr,seqArr,n);
    seqArr.push(arr[i]);
    f(i+1,arr,seqArr,n);
    seqArr.pop(arr[i]);

}


let arr=[3,1,2];
let seqArr = [];
f(0,arr,seqArr, arr.length);