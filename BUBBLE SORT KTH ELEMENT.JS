// // To find kth largest/smallest element
// // We can modify our bubble sort algorithm to detect the kth largest or smallest
// // element in a sorted array.
// // To do so we just need to update the outer loop by making it run only k number of
// // times and then take the kth last element of the array that we got after kth iteration.
// // So if in array [5,4,3,2,1,6,2] i have to find the 3rd largest element then

arr = [5, 4, 3, 2, 1, 6, 2];
function bubbleSort(inputArray, k) {
  for (var i = 0; i < k; i++) {
    var isSwapped = false;

    for (var j = 0; j < inputArray.length - i - 1; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        var temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return inputArray;
}

k = 3;
arr = bubbleSort(arr, k);
console.log(arr[arr.length - k]);
