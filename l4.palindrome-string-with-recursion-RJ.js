// check palindrome wit single pointer recursion

function pal(i,str,n){
    if(i>=n/2) return true;

    if(str[i]!=str[n-i-1]) return false;

    return pal(i+1,str,n);
}
let str = 'aaaa';
let tempArr = str.split('');

console.log(pal(0,tempArr,tempArr.length));