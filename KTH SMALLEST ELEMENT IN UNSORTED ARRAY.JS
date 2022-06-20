

// Simple Javascript program to find k'th smallest element

// Function to return k'th smallest element in a given array
function kthSmallest(arr, n, k)
{
	// Sort the given array
	arr.sort((a,b) => a-b);
	//for largest element
	//arr.sort((a,b) => b-a);

	// Return k'th element in the sorted array
	return arr[k - 1];
}

// Driver program to test above methods
	let arr = [ 12, 3, 5, 7, 19 ];
	let n = arr.length, k = 2;
	console.log("K'th smallest element is " + kthSmallest(arr, n, k));



