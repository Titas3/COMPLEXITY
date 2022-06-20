
	function constructLowerArray(arr, countSmaller, n)
	{
		let i, j;

		for (i = 0; i < n; i++)
			countSmaller[i] = 0;

		for (i = 0; i < n; i++)
		{
			for (j = i + 1; j < n; j++)
			{
				if (arr[j] < arr[i])
					countSmaller[i]++;
			}
		}
	}
	
	
	function printArray(arr, size)
	{
		let i;
		for (i = 0; i < size; i++)
			console.log(arr[i]);

	}
	
	let arr = [12, 10, 5, 4, 2, 20, 6, 1, 0, 2];
	let n = arr.length;
	let low = new Array(n);

	constructLowerArray(arr, low, n);
	printArray(low, n);
