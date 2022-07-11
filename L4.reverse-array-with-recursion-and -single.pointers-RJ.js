// reverse the array using single pointer and recursion

function reverseSinglePointer(arr, i, n) {
    console.log("arr", arr, "i", i, "n", n);
    if (i >= n / 2) return;
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
    i++;
    reverseSinglePointer(arr, i, n);
  }
  
  let arrSample = [1, 2, 3, 4, 5, 6];
  reverseSinglePointer(arrSample, 0, arrSample.length);
  console.log(arrSample);