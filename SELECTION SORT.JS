let arr = [5,4,3,2,1,6,6];
n= arr.length;
selectionSort(arr);
console.log(arr);

function selectionSort(arr){
    for (let i = 0;i<n; i++){
        let minIndex = i;
        for (let j=i;j<n;j++){
            if(arr[minIndex]> arr[j]){
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
}

function swap(arr,i,minIndex){
    var temp = arr[minIndex];
    arr[minIndex]= arr[i]
    arr[i] = temp;
}