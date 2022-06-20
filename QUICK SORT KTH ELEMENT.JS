let arr = [1, 10, 14,5,9, 7, 8];
//partitionFirst(arr, 0, arr.length-1);

function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}


// when last is pivot
function partitionEnd(arr, low, high) {

    let pivot = arr[high];
    let i = low;
    for(let j=low;j<high;j++) {
        if(arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, high, i);
    return i;
}


function quickSelect(arr, k, low, high) {
    let partitionIndex = partitionEnd(arr, low, high);

    if(partitionIndex === k-1) {
        return arr[partitionIndex];
    } else if(partitionIndex < k-1) {
        return quickSelect(arr, k, partitionIndex+1, high);
    } else {
        return quickSelect(arr, k, low, partitionIndex-1);
    }
}
console.log(quickSelect(arr, 3, 0, arr.length-1));