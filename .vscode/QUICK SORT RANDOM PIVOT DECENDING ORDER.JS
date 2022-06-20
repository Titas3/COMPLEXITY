function quickSort(arr, low, high) {
    if(low>=high)
        return;
    let pivot = arr[Math.floor(Math.random()*(high-low+1)+low)];
    let start = low;
    let end = high;
    while(start < end) {
        while(arr[start] > pivot) {
            start++;
        }
        while(arr[end] < pivot) {
            end--;
        }
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
    }
    let partitionIndex = end
    quickSort(arr, low, partitionIndex-1);
    quickSort(arr, partitionIndex+1, high);
}

let arr = [3,5,7,6,1,2,4,8]
quickSort(arr,0,arr.length-1)
console.log(arr)