// Give an array of name of country, you are supposed to sort it in lexicographical order using the
// selection sort

// Input : [“India”,”Australia”,”China”,”Russia”,”Brazil”,”Japan”]
// Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]
// Hint: String comparison can be done using localeCompare()

function selectionSort(inputArray)
{
    var i, j, minimumIndex;
 
    for (i = 0; i < inputArray.length-1; i++)
    {
        // Initialize the current element as minimumIndex
        minimumIndex = i;
        for (j = i + 1; j < inputArray.length; j++)
        {
            if (inputArray[j].localeCompare(inputArray[minimumIndex])==-1)
            {
                minimumIndex = j;
            }
        }
        // Swap the found minimum element with the current element
        if (minimumIndex != i)
        {
            var temp = inputArray[minimumIndex]
            inputArray[minimumIndex] = inputArray[i]
            inputArray[i] = temp
        }
    }
    return inputArray
}
  
// This is our unsorted array
var arr = ["India","Australia","China","Russia","Brazil","Japan"];
console.log(selectionSort(arr));