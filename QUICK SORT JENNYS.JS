function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function partition(arr,lb,ub)
{
   let pivot = arr[lb];
   let start = lb;
   let end = ub;
    while(start < end){
        while(arr[start]<=pivot){
            start++;
        }
        while(arr[end]>pivot){
            end--;
        }
        if(start<end){
            swap(arr[start],arr[end]);
        }
    }
    swap(arr[lb],arr[end]);
    return ;
}


function quickSort(arr,lb,ub){
if(lb<ub){
    loc=partition(arr,lb,ub);
    quickSort(arr,lb,loc-1);
    quickSort(arr,loc+1,ub);
}
}

function printArray(arr, n) {
	for (let i = 0; i < n; i++)
		console.log(arr[i] + " ");

	
}


let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

quickSort(arr, 0, n - 1);
console.log("Sorted array:");
printArray(arr, n);
