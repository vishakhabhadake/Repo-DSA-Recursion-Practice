// reverse the array with recursion and two pointer approach

var reverse = function (arr, left, right) {
  if (left >= right) {
    return;
  }

  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  left++;
  right--;
  reverse(arr, left, right);
};

let arr = [1, 2, 3, 4, 5, 6];
let res = reverse(arr, 0, arr.length - 1);
console.log(arr);


