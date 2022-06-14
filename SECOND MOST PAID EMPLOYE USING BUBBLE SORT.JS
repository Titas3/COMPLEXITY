// Problem-2
// Given an object of employee name and there salary, find the second most paid employee of the
// company
// Input :
// arr=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'n
// ame':'Riya','salary':650000},{'name':'Rithik','salary':45000},{'name':'Ritesh','salary':230000}]
// Output:
// Rakesh

arr=[{'name':'Ram','salary':100000},
    {'name':'Ramesh','salary':10000},
    {'name':'Rakesh','salary':500000},
    {'name':'Riya','salary':650000},
    {'name':'Rithik','salary':45000},
    {'name':'Ritesh','salary':230000}]

function bubbleSort(inputArray,k) {
    for (var i = 0; i < k; i++) {
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length - i - 1); j++) {
            // Check if the current element is greater than the next element
            if (inputArray[j]['salary'] > inputArray[j + 1]['salary']) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}
k=2
arr=  bubbleSort(arr,k);
console.log(arr)
console.log(arr[arr.length-k]['name']);
