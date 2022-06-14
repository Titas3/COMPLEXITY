// Give an array of name of country, you are supposed to sort it in
// lexicographical order using the bubble sort
// Input : [“India”,”Australia”,”China”,”Russia”,”Brazil”,”Japan”]
// Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]
// Hint: String comparison can be done using localeCompare()

function bubbleSort(inputArray, k) {
    for (var i = 0; i < inputArray.length ; i++) {
      var isSwapped = false;
  
      for (var j = 0; j < inputArray.length - i - 1; j++) {
        if (inputArray[j].localeCompare(inputArray[j + 1])!=-1) {
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
  
 
 var arr = [ 'India','Australia','China','Russia','Brazil','Japan'] ;
  console.log(bubbleSort(arr));